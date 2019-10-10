interface CopyCasterRequest {
    "RegionId"?: string;
    /**
    * 原导播台ID。
    * @example `a2b8e671-2fe5-4642-a2ec-bf93880e1a49`
    */ "SrcCasterId": string;
    /**
    * 用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `53200b81-b761-4c10-842a-a0726d972293`
    */ "ClientToken": string;
    "OwnerId"?: number;
    /**
    * 新导播台名称。
    * @example `caster001`
    */ "CasterName": string;
}
export { CopyCasterRequest };