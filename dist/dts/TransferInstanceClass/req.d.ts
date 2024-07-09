export interface TransferInstanceClassRequest {
    /**
     * 请填入**UPGRADE**。
     * @example `UPGRADE`
     */
    "OrderType": string;
    /**
     * 升级后的实例规格，可以调用[DescribeDtsJobDetail](~~208925~~)查询升级前的实例规格。
     * - 迁移实例支持的规格：**xxlarge**、**xlarge**、**large**、**medium**、**small**。
     * - 同步实例支持的规格：**large**、**medium**、**small**、**micro**。
     * > 关于各链路规格的说明及性能测试情况请参见[数据迁移链路规格说明](~~26606~~)和[数据同步链路规格说明](~~26605~~)。
     * @example `large`
     */
    "InstanceClass": string;
    /**
     * DTS实例所在地域的ID，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 迁移或同步任务ID，可调用[DescribeDtsJobs](~~209702~~)查询。
     * @example `r4yr723m199****`
     */
    "DtsJobId": string;
}
