export interface TransferPayTypeRequest {
    /**
     * 同步或订阅任务ID，可调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `o4nh3g7jg56****`
     */
    "DtsJobId": string;
    /**
     * 修改后的付费方式，取值：
     * - **PrePaid**：预付费，即包年包月。
     * - **PostPaid**：后付费，即按量付费。
     * <props="china">
     * - **sync_serverless**：后付费Serverless。</props>
     * @example `PostPaid`
     */
    "ChargeType": string;
    /**
     * 预付费实例的计费方式，取值：
     * - **Year**：包年。
     * - **Month**：包月。
     * > 当**ChargeType**为**PrePaid**（预付费）时，该参数才有效且必须传入。
     * @example `Year`
     */
    "Period"?: string;
    /**
     * 预付费实例购买时长。
     * - 当**Period**为**Year**（包年）时，取值范围为**1**~**5**。
     * - 当**Period**为**Month**（包月）时，取值范围为**1**~**60**。
     * > 当**ChargeType**为**Prepaid**（预付费）时，该参数才有效且必须传入。
     * @example `5`
     */
    "BuyCount"?: string;
    /**
     * 实例所属的地域，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * Serverless实例的DU下限，取值为：1、2、4、8、16。
     * <props="intl">
     * > 当前暂不支持此功能，请勿传入参数。</props>
     * <props="china">
     * > 当**ChargeType**为**sync_serverless**时，该参数才有效且必须传入。</props>
     * @example `1`
     */
    "MinDu"?: number;
    /**
     * Serverless实例的DU上限，取值为：2、4、8、16。
     * <props="intl">
     * > 当前暂不支持此功能，请勿传入参数。</props>
     * <props="china">
     * > 当**ChargeType**为**sync_serverless**时，该参数才有效且必须传入。</props>
     * @example `16`
     */
    "MaxDu"?: number;
    "AutoPay"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
}
