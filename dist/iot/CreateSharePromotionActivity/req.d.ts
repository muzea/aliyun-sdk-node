export interface CreateSharePromotionActivityRequest {
    /**
     * 促销活动的名称。
     * @example `task01`
     */
    "SharePromotionActivityName": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cv3********`
     */
    "IotInstanceId"?: string;
    /**
     * 促销活动开始时间的毫秒级时间戳。不传入，表示促销活动没有开始时间的限制。
     * @example `1691547072000`
     */
    "StartTime"?: number;
    /**
     * 促销活动结束时间的毫秒级时间戳。不传入，表示促销活动没有结束时间的限制。
     * @example `1694315533000`
     */
    "EndTime"?: number;
}
