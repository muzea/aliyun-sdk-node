export interface DescribeCastersRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaste接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台 > 导播台 > 云导播台**页面查看。
     * >直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId"?: string;
    /**
     * 导播台名称。
     * @example `liveCaster****`
     */
    "CasterName"?: string;
    /**
     * 起始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2016-06-29T09:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2016-06-29T11:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每⻚模板数值，不传默认为100。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 状态。 取值：
     * - 0：空闲。
     * - 1：导播中。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 付费方式。 取值：
     * - 0：PrePaid预付费。
     * - 1：PostPaid后付费。
     * @example `0`
     */
    "ChargeType"?: number;
    /**
     * 是否按照导播台的修改时间进行升序排序。
     * > 不填默认为"false"。
     * @example `false`
     */
    "OrderByModifyAsc"?: string;
    /**
     * 导播台规格类型。取值：
     * - 1：通用型。
     * - 3：轻量级轮播型。
     * - 4：虚拟演播厅型。
     * - 6：轮播台（新播单型导播台）。
     * @example `1`
     */
    "NormType"?: string;
}
