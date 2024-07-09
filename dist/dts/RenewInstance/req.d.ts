export interface RenewInstanceRequest {
    /**
     * 同步或订阅任务ID，可调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `qi0r643lc31****`
     */
    "DtsJobId": string;
    /**
     * 付费类型为**PREPAY**，包年包月（预付费）。
     * @example `PREPAY`
     */
    "ChargeType": string;
    /**
     * 续费实例的计费方式，取值：
     * - **Year**：包年。
     * - **Month**：包月（默认值）。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 续费实例购买时长，默认为1。
     * - 当**Period**为**Year**（包年）时，取值范围为**1~5**。
     * - 当**Period**为**Month**（包月）时，取值范围为**1~60**。
     * @example `1`
     */
    "BuyCount"?: string;
    /**
     * DTS实例所在地域的ID，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
