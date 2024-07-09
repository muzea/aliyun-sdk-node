export interface CreateARMServerInstancesRequest {
    /**
     * 付费类型。取值：**PrePaid**（预付费）。
     * > 目前仅支持预付费。
     * @example `PrePaid`
     */
    "PayType": string;
    /**
     * ENS节点ID。
     * @example `cn-guiyang-12`
     */
    "EnsRegionId": string;
    /**
     * ARM板卡规格。取值：
     * - cas.cf53r
     * - cas.cf52r
     * - cas.cf52m1r
     * - cas.tg52g2
     * - ens.afq-c2m3i.medium
     * @example ` cas.cf53r`
     */
    "ServerType": string;
    /**
     * AIC容器实例规格。取值：
     * - aic.cf52r.c1.np
     * - aic.cf52r.c2.np
     * - aic.cf53r.c2.np
     * - aic.cf52r.c4.np
     * - aic.cf53r.c3.np
     * - aic.cf52r.c3.np
     * - aic.cf53r.c1.np
     * - aic.cf53r.c5.np
     * - aic.cf53r.c6
     * - aic.cf53r.c4.np
     * - aic.cf53r.c6.np
     * - aic.cf53r.c7.np
     * - aic.cf52m1r.c5.np
     * - aic.cf53r.c8.np
     * - aic.cf53r.c7
     * - aic.cf52m1r.c2.np
     * - aic.cf52m1r.c1.np
     * - aic.cf52m1r.c3.np
     * - aic.cf52m1r.c4.np
     * - aic.cf52m1r.c6
     * - ens.a6c2
     * @example `aic.cf53r.c6.np`
     */
    "InstanceType": string;
    /**
     * 镜像ID。
     * @example `yourImage ID`
     */
    "ImageId": string;
    /**
     * 分辨率。取值：
     * - 1920*864
     * - 1080*1920
     * - 1920*1080
     * - 720*1280
     * - 2400*1080
     * - 1080*2400
     * - 1280*720
     * - 864*1920
     * @example `720*1280`
     */
    "Resolution": string;
    /**
     * 刷新频率，单位：Hz。取值：30，60。
     * @example `30`
     */
    "Frequency"?: number;
    /**
     * 密钥对名称。
     * @example `TestKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 创建的实例数量，最小为**1**，最大为**100**。
     * @example `1`
     */
    "Amount": number;
    /**
     * 购买资源的时长。
     * - 如果不指定PeriodUnit，则默认按月购买。目前只支持按Days和Month。
     * - 如果PeriodUnit为Day时，Period仅可以3。
     * - 如果PeriodUnit为Monthc时，则Period可以为1~9,12。
     * @example `1`
     */
    "Period": number;
    /**
     * 购买资源的时长单位。
     * - 如果不指定PeriodUnit，则默认按月购买。目前只支持按Days和Month。
     * - 如果PeriodUnit为Day时，Period仅可以3。
     * - 如果PeriodUnit为Monthc时，则Period可以为1~9,12。
     * @example `Month`
     */
    "PeriodUnit": string;
    /**
     * 是否自动续费。
     * - true
     * - false（默认）
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 命名空间。
     * @example `pre`
     */
    "NameSpace"?: string;
    /**
     * 服务名称。
     * @example `AIC-Server`
     */
    "ServerName"?: string;
    /**
     * 是否使用代金券。取值：
     * - true：使用
     * - false（默认值）：不使用
     * @example `true`
     */
    "AutoUseCoupon"?: boolean;
}
