interface DescribeWhiteListRequest {
    /**
    * 地域ID，必须与UIS实例的地域ID一致。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * UIS实例ID。
    * @example `UIS-xxxvb2gnqbvgrqsd9****`
    */ "UisId": string;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
}
export { DescribeWhiteListRequest };