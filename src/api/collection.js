import request from '@/utils/request'

// 获取所有数据采集状态
// export function getAllState(pageNum, pageSize) {
//     return request({
//         url: `/status/getAll?pageNum=${pageNum}&pageSize=${pageSize}`,
//         // method: 'get',
//         method: 'post',
//     })
// }

// 获取分页条件查询数据采集状态
// export function getByUserId(param) {
//     // const queryString = new URLSearchParams(param).toString();
//     return request({
//         url: `/status/getByUserId`,
//         // method: 'get',
//         method: 'post',
//         param
//     });
// }

// 用来修改任务状态
export function updateStatus(taskId, statusValue) {
    return request({
        url: `/status/updateStatus?taskId=${taskId}&statusValue=${statusValue}`,
        method: 'put',
    })
}

// 获取所有采集员
export function getCaijiRole() {
    return request({
        url: `/status/getCaijiRole`,
        method: 'post',
    })
}

// 分页条件获取检验批采集情况
export function getByUserId(param) {
  return request({
    url: `/status/getByUserId`,
    method: 'post',
    data: param // 使用 data 字段传递请求体
  });
}

// 任务分发
export function TaskDistribution(param) {
    return request({
        url: `/status/TaskDistribution`,
        method: 'post',
        data:param
    });
}

// 通过taskID获取规范项目和验收规范
export function getInspectItemBytaskId(taskId) {
    return request({
        url: `/status/getInspectItemBytaskID?taskId=${taskId}`,
        method: 'get',
    })
}