interface DeleteUisRequest {
    /**
    * 实例的地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * 要删除的实例的ID。
    * @example `UIS-xxxk7k971za1h6gxk****`
    */ "UisId": string;
}
export { DeleteUisRequest };