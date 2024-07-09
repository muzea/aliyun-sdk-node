export interface DescribeCdnUserBillPredictionRequest {
    /**
     * 默认为月初第一天的零点整, 日期格式按照ISO8601表示法，并使用UTC时间，格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2018-09-30T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 默认为当前时间, 日期格式按照ISO8601表示法，并使用UTC时间，格式为：yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2018-10-25T10:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 获取计费类型的维度，flow表示流量带宽。
     * @example `flow`
     */
    "Dimension"?: string;
    /**
     * 计费大区。取值：
     * - **CN**：中国内地。
     * - **OverSeas**：全球（不包含中国内地）。
     * - **AP1**：亚太1区。
     * - **AP2**：亚太2区。
     * - **AP3**：亚太3区。
     * - **NA**：北美。
     * - **SA**：南美。
     * - **EU**：欧洲。
     * - **MEAA**：中东、非洲。
     * 默认按用户当前计费模式决定，如果是海外分大区则为**CN**，**OverSeas**，否则为**CN**，**AP1**，**AP2**，**AP3**，**NA**，**SA**，**EU**或**MEAA**。
     * > 各区域包含的具体国家地区，请参见[计费概述](~~142221~~)。
     * @example `CN,OverSeas`
     */
    "Area"?: string;
}
