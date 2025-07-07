import request from '@/utils/request'


export function getRawMaterial(data) {
  return request({
    url: '/steelMaterialLedger/pageQuery',
    method: 'post',
    data: data
  })
}

export function getConnection(data) {
  return request({
    url: '/mechanicalConnectLedger/pageQuery',
    method: 'post',
    data: data
  })
}

export function getProjectNameList(userId) {
  return request({
    url: `/ledger/projectNameList?userId=${userId}`,
    method: 'get',
  })
}

export function getSubprojectNameList(projectId) {
  return request({
    url: `/ledger/subprojectNameList?projectId=${projectId}`,
    method: 'get',
  })
}

export function getWeld(pageNum,pageSize,userid,projectName,subProjectName,usePart) {
  return request({
    url: `/weldTable/page?pageNum=${pageNum}&pageSize=${pageSize}&userid=${userid}&projectName=${projectName}&subProjectName=${subProjectName}&usePart=${usePart}`,
    method: 'get',
  })
}

export function getBeton(pageNum,pageSize,userid,projectName,subProjectName,usePart) {
  return request({
    url: `/concreteTable/page?pageNum=${pageNum}&pageSize=${pageSize}&userid=${userid}&projectName=${projectName}&subProjectName=${subProjectName}&usePart=${usePart}`,
    method: 'get',
  })
}

export function deleteRawById(dataId) {
  return request({
    url: `/steelMaterialLedger/deleteById/${dataId}`, 
    method: 'delete'
  });
}

export function deleteConnectionById(dataId) {
  return request({
    url: `/mechanicalConnectLedger/deleteById/${dataId}`, 
    method: 'delete'
  });
}

export function deleteWeldById(dataId) {
  return request({
    url: `/weldTable/deleteWeldTableById?dataId=${dataId}`, 
    method: 'delete'
  });
}

export function deleteBetonById(dataId) {
  return request({
    url: `/concreteTable/deleteConcreteTableById?dataId=${dataId}`, 
    method: 'delete'
  });
}