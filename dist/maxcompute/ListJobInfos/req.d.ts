export interface ListJobInfosRequest {
    /**
     * 租户id
     * @example `478403690625249`
     */
    "tenantId"?: string;
    /**
     * 地域id。
     * @example `cn-shanghai`
     */
    "region"?: string;
    /**
     * 排序列
     * @example `cuUsage`
     */
    "orderColumn"?: string;
    /**
     * 升序or降序
     * @example `true`
     */
    "ascOrder"?: boolean;
    /**
     * 分页页码。
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 请求体参数
     * @example `{
      "from":1672112000, #起始时间戳
      "to":1672112130, #截止时间戳
      "statusList":[], #作业状态
      "quotaNickname":"quota_nickname", #配额名称
      "projectList":[], #项目名称
      "typeList":[], #类型
      "jobOwnerList":[], #作业owner
      "signatureList":[], #sql签名
      "extNodeIdList":[],
      "instanceIdList":[], #实例ID
      "priorityList":[], #作业优先级
      "settings":{
        "key":"value"
      }
    }`
     */
    "body"?: string;
}
