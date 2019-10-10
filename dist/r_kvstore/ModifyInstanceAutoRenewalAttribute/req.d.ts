interface ModifyInstanceAutoRenewalAttributeRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。多个实例ID用半角逗号（‘,’）拼接，最多允许传入30个实例ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 自动续费周期，当AutoRenew=True时，该值有效且必传，取值范围为1-12。实例到期时，将以月为单位进行自动续费，月数等于该值。
    * @example `3`
    */ "Duration"?: string;
    /**
    * 开启或关闭自动续费，可选值：
    * * True（开启）
    * * False（关闭）
    * > 默认值：False。
    * @example `True`
    */ "AutoRenew"?: string;
}
export { ModifyInstanceAutoRenewalAttributeRequest };