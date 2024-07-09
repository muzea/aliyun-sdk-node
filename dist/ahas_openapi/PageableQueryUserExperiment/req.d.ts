export interface PageableQueryUserExperimentRequest {
    /**
     * 演练检索关键字。
     * @example `演练名称检索`
     */
    "SearchKey"?: string;
    /**
     * 演练状态。包括：
     * - INVISIBLE 不可见
     * - DRAFT 编辑中
     * - READY 就绪
     * - RUNNING 运行中
     * - FINISHED 已结束
     * @example `READY`
     */
    "State"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "Size"?: number;
    /**
     * 演练所属的命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 演练所属地域ID（调用公网接口使用）。
     * @example `cn-public`
     */
    "AhasRegionId"?: string;
    /**
     * 演练空间ID。若传入该字段则查询指定空间的演练列表，否则查询用户默认空间的演练列表。
     * @example `1234567890123456789`
     */
    "WorkspaceId"?: string;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 演练检索标签。
     * @example `演练标签`
     */
    "Tags"?: string[];
    /**
     * 演练最后一次任务运行结果。
     * @example `FINISHED`
     */
    "Results"?: string[];
}
