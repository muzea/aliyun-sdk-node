export interface ListAppReleaseStageExecutionsRequest {
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId"?: string;
    /**
     * 应用名
     * @example `testApp`
     */
    "appName": string;
    /**
     * 研发流程sn
     * @example `340beb481a334fd49b006816382f0c11`
     */
    "releaseWorkflowSn": string;
    /**
     * 研发阶段sn
     * @example `e173f3c11db5445eb426ca33c92207c8`
     */
    "releaseStageSn": string;
    /**
     * 分页模式参数：keyset表示键集分页
     * @example `keyset`
     */
    "pagination"?: string;
    /**
     * 分页尺寸参数，决定一页最多返回多少对象，默认20，限制[1,100]
     * @example `20`
     */
    "perPage"?: number;
    /**
     * 分页排序属性，决定根据何种属性进行记录排序；默认 gmtCreate
     * @example `gmtCreate`
     */
    "orderBy"?: string;
    /**
     * 分页排序升降序，asc 为升序，desc 为降序；默认 desc
     * @example `desc`
     */
    "sort"?: string;
    /**
     * 键集分页 token，获取第一页数据时无需传入，否则需要传入前一页查询结果中的 nextToken 字段
     * @example `""`
     */
    "nextToken"?: string;
    /**
     * 键集分页模式下不需要传入
     * @example `1`
     */
    "page"?: number;
}
