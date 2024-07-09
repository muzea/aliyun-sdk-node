export interface ListApplicationsRequest {
    /**
     * 分页模式参数，目前只支持键集分页 keyset 模式
     * @example `keyset`
     */
    "pagination"?: string;
    /**
     * 分页尺寸参数，决定一页最多返回多少对象
     * @example `20`
     */
    "perPage"?: number;
    /**
     * 分页排序属性，决定根据何种属性进行记录排序；推荐在实现严格遍历时，使用 id 属性
     * @example `id`
     */
    "orderBy"?: string;
    /**
     * 分页排序升降序，asc 为升序，desc 为降序；推荐在实现严格遍历时，使用升序
     * @example `asc`
     */
    "sort"?: string;
    /**
     * 键集分页 token，获取第一页数据时无需传入，否则需要传入前一页查询结果中的 nextToken 字段
     * @example `vxc2341gfssad12`
     */
    "nextToken"?: string;
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId"?: string;
}
