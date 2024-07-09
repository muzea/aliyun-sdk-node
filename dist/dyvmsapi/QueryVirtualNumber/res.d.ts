export interface QueryVirtualNumberResponse {
    /**
     * 请求状态码。返回200代表请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 查询成功后返回关联号码详情。字段含义：
     * - createTime：号码开通时间。
     * - qualificationCount：资质数量。
     * - cityCount：城市数量。
     * - phoneNumCount：虚拟号码数量。
     * - remark：标记。
     * - phoneNum：虚拟号码。
     * - routeType：路由类型。
     * - canCancel：能否注销。
     * - specCount：供应商数量。
     * - status：号码状态。取值：**1**有效；**0**无效；**-1**注销。
     * - pageNo：分页号。
     * - pageSize：分页大小。
     * - total：总数。
     * @example `{"data":[{"createTime":"2020-07-15 04:00:00","qualificationCount":0,"cityCount":0,"phoneNumCount":1,"remark":"20200715联通CTD关停","phoneNum":"05516214****","routeType":1,"canCancel":true,"specCount":0,"status":"1"}],"pageSize":1,"total":17,"pageNo":1}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `9FF70B74-1B3C-44C1-ACDF-8DF962988F0E`
     */
    RequestId: string;
}
