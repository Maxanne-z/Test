import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
 roles: ['admin','editor']    control the page roles (you can set multiple roles)
 title: 'title'               the name show in sidebar and breadcrumb (recommend set)  显示
 icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
 breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
 activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
 }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

// 路由分三种：初始化路由=默认路由，动态路由
// 常量路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true // hidden: true 隐藏在侧边栏的。这意味着它不会出现在导航菜单中，但仍然可以直接访问。
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard', // 重定向
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '工作台', icon: 'dashboard' }
    }]
  },
  {
    path: '/menus',
    component: Layout,
    redirect: '/dashboard',
    name: 'Menus',
    hidden: true,
    children: [
      {
        path: 'inspection',
        name: 'Inspection',
        component: () => import('@/views/inspectionBatch'),
        meta: { title: '验收规范管理', icon: 'batch' }
      },
      {
        path: 'task',
        name: 'Task',
        component: () => import('@/views/dataCollection/task'),
        meta: { title: '数据采集任务', icon: 'task' }
      },
      {
        path: 'collection',
        name: 'Collection',
        redirect: '/menus/collection/collectionManage',
        component: () => import('@/views/dataCollection/taskAssignment'),
        meta: { title: '数据采集情况', icon: 'assign' },
        children: [
          {
            path: 'collectionManage',
            name: 'CollectionManage',
            component: () => import('@/views/dataCollection/taskAssignment/components/collectionManage.vue'),
            meta: { title: '数据采集情况管理', breadcrumb: false }
          },
          {
            path: 'assignment',
            name: 'Assignment',
            component: () => import('@/views/dataCollection/taskAssignment/components/assignment.vue'),
            meta: { title: '采集任务分发' }
          },
          {
            path: 'collectionDetail',
            name: 'CollectionDetail',
            component: () => import('@/views/dataCollection/taskAssignment/components/collectionDetail.vue'),
            meta: { title: '数据采集详情' }
          }

        ]
      },
      {
        path: 'project',
        name: 'Project',
        redirect: '/menus/project/projectManage',
        component: () => import('@/views/project'),
        meta: { title: '项目管理', icon: 'assign' },
        children: [
          {
            path: 'personAllocation',
            name: 'PersonAllocation',
            component: () => import('@/views/project/components/personAllocation.vue'),
            meta: { title: '人员分配', }
          },
          {
            path: 'projectManage',
            name: 'projectManage',
            component: () => import('@/views/project/components/projectManage.vue'),
            meta: { title: '项目管理', breadcrumb: false }
          },
          {
            path: 'projectEdit',
            name: 'projectEdit',
            component: () => import('@/views/project/components/projectEdit.vue'),
            meta: { title: '项目编辑' }
          }
        ]
      },
      {
        path: 'ocrTemplate',
        name: 'OcrTemplate',
        redirect: '/menus/ocrTemplate/ocrManage',
        component: () => import('@/views/ocrTemplate'),
        meta: { title: 'OCR模版管理', icon: 'statement' },
        children: [
          {
            path: 'ocrManage',
            name: 'ocrManage',
            component: () => import('@/views/ocrTemplate/components/ocrManage.vue'),
            meta: { title: 'OCR模版管理', icon: 'statement', breadcrumb: false }
          },
          {
            path: 'ocrDetail',
            name: 'OcrDetail',
            component: () => import('@/views/ocrTemplate/components/ocrDetail.vue'),
            meta: { title: 'OCR模版详情', icon: 'statement' }
          },
        ]
      },
      {
        path: 'ledger',
        name: 'Ledger',
        component: () => import('@/views/ledgerManage'),
        meta: { title: '台账管理', icon: 'approve' },
        children: [
          {
            path: 'rawMaterial',
            name: 'RawMaterial',
            component: () => import('@/views/ledgerManage/rawMaterial.vue'),
            meta: { title: '钢筋原材', breadcrumb: false },
          },
          {
            path: 'connection',
            name: 'Connection',
            component: () => import('@/views/ledgerManage/connection.vue'),
            meta: { title: '钢筋机械连接' }
          },
          {
            path: 'weld',
            name: 'Weld',
            component: () => import('@/views/ledgerManage/weld.vue'),
            meta: { title: '钢筋焊接' }
          },
          {
            path: 'beton',
            name: 'Beton',
            component: () => import('@/views/ledgerManage/beton.vue'),
            meta: { title: '混凝土强度' }
          },
          {
            path: 'ledgerEntry/:type',
            name: 'LedgerEntry',
            component: () => import('@/views/ledgerManage/ledgerEntry.vue'),
            meta: { title: '台账录入' }
          },
          {
            path: 'OCREntry/:type',
            name: 'OCREntry',
            component: () => import('@/views/ledgerManage/OCREntry.vue'),
            meta: { title: 'OCR数据录入' }
          },
        ]
      },
      {
        path: 'statement',
        name: 'StateMent',
        component: () => import('@/views/statementManage'),
        meta: { title: '数据报表管理', icon: 'statement' }
      },
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/authority/users'),
        meta: { title: '用户管理', icon: 'el-icon-lock' }
      },
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('@/views/authority/roles'),
        meta: { title: '角色管理', icon: 'el-icon-lock' }
      }
    ]
  }
  // { path: '*', redirect: '/404', hidden: true }
]
// 异步路由
export const asyncRoutes = [
  {
    path: '/inspectionBatch',
    component: Layout,
    redirect: '/dashboard',
    name: 'inspect_lot_management',
    // meta: { title: '检验批管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'inspection',
        name: 'Inspection',
        component: () => import('@/views/inspectionBatch'),
        meta: { title: '检验批管理', icon: 'batch' }
      }
    ]
  },
  {
    path: '/dataCollection',
    component: Layout,
    redirect: '/dashboard',
    name: 'data_collection',
    // meta: { title: '数据收集管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'task1',
        name: 'Task',
        component: () => import('@/views/dataCollection/task'),
        meta: { title: '数据采集任务', icon: 'task' }
      }
    ]
  },
  {
    path: '/taskAssignment',
    component: Layout,
    redirect: '/dashboard',
    name: 'task_assignment',
    children: [
      {
        path: 'assignment',
        name: 'Assignment',
        component: () => import('@/views/dataCollection/taskAssignment'),
        meta: { title: '采集任务分发', icon: 'assign' }
      }
    ]
  },
  {
    path: '/project',
    component: Layout,
    redirect: '/dashboard',
    name: 'project_management',
    children: [
      {
        path: 'projectManage',
        name: 'ProjectManage',
        component: () => import('@/views/project'),
        meta: { title: '项目管理', icon: 'program' }
      }
    ]
  },
  {
    path: '/stateMents',
    component: Layout,
    redirect: '/dashboard',
    name: 'data_report',
    // meta: { title: '数据报表', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'statement',
        name: 'StateMent',
        component: () => import('@/views/statementManage'),
        meta: { title: '数据报表管理', icon: 'statement' }
      }
    ]
  },
  {
    path: '/projectApprove',
    component: Layout,
    redirect: '/dashboard',
    name: 'ProjectApprove',
    children: [
      {
        path: 'approve',
        name: 'Approve',
        component: () => import('@/views/projectApprove'),
        meta: { title: '项目审批', icon: 'approve' }
      }
    ]
  },
  {
    path: '/authority',
    component: Layout,
    redirect: '/dashboard',
    name: 'Authority',
    meta: { title: '权限管理', icon: 'el-icon-lock' },
    children: [
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/authority/users'),
        meta: { title: '用户管理' }
      },
      {
        path: 'roles',
        name: 'Roles',
        component: () => import('@/views/authority/roles'),
        meta: { title: '角色管理' }
      }
    ]
  }
]
// 任意路由：当路径出现错误的时候重定向404
export const anyRoutes = { path: '*', redirect: '/404', hidden: true }

// 创建 router 实例，然后传 `routes` 配置
const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  // console.log('*****',newRouter)
  // const asyncRoutes = store.state.user.permissionList
  // console.log('动态路由',asyncRoutes)

  router.matcher = newRouter.matcher // reset router
  // 遍历删除
  // asyncRoutes.forEach((item)=>router.options.routes.push(item))
  // router.removeRoute(asyncRoutes)
}

export default router
