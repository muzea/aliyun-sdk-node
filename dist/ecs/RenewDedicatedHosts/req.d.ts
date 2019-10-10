interface RenewDedicatedHostsRequest {
    /**
    * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 专有宿主机的编号列表。最多可以输入100个预付费专有宿主机ID。多个专有宿主机ID用一个格式类似[“dh-xxxxxxxxx”, “dh-yyyyyyyyy”, … “dh-zzzzzzzzz”]的JSON数组表示，ID之间用半角逗号（,）隔开。
    * @example `dh-xxxxxxxxxxxxxxxxx`
    */ "DedicatedHostIds": string;
    /**
    * 续费周期。取值范围：请参见**PeriodUnit**参数的描述部分。
    * @example `1`
    */ "Period": number;
    /**
    * @example `cn-beijing`
    */ "SourceRegionId"?: string;
    "OwnerId"?: number;
    /**
    * 续费时长单位。取值范围：
    * - Week：周。此时，参数**Period**的取值范围为 {1, 2, 3, 4}。
    * - Month（默认）：月。此时，参数**Period**的取值范围为 {1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60}。
    * @example `Month`
    */ "PeriodUnit"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `xxxxxxxxxxxxxxxxxxxxxxxx`
    */ "ClientToken"?: string;
}
export { RenewDedicatedHostsRequest };