interface CreateCasterRequest {
    "RegionId"?: string;
    /**
    * 导播台规格类型。可取值：
    * - **0**：播单型
    * - **1**：通用型
    * @example `1`
    */ "NormType": number;
    /**
    * 付费方式。可取值：
    * - **PrePaid**：预付费
    * - **PostPaid**：后付费
    *  > 目前只支持PostPaid。
    * @example `PrePaid`
    */ "ChargeType": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `53200b81-b761-4c10-842a-a0726d972293`
    */ "ClientToken": string;
    /**
    * 默认为**CasterId**。
    * @example `coco-caster5`
    */ "CasterName"?: string;
    /**
    * 导播台购买时间。
    * @example `2017-08-20T12:10:10Z`
    */ "PurchaseTime"?: string;
    /**
    * 导播台过期时间。
    * @example `2017-08-22T12:10:10Z`
    */ "ExpireTime"?: string;
    /**
    * 导播台预设分辨率。采用预付费方式时，取值：
    * - **lp_ld**：流畅
    * - **lp_sd**：标清
    * - **lp_hd**：高清
    * - **lp_ud**：超清
    * @example `lp_sd`
    */ "CasterTemplate"?: string;
}
export { CreateCasterRequest };