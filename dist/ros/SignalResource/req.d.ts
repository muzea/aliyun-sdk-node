interface SignalResourceRequest {
    /**
    * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 信号的状态。故障信号会导致无法创建或更新堆栈。如果所有信号都是警告信号，也将无法创建或更新堆栈。可选值：
    * - SUCCESS
    * - FAILURE
    * - WARNING
    * @example `SUCCESS`
    */ "Status": string;
    /**
    * 资源栈ID。
    * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691f2ff`
    */ "StackId": string;
    /**
    * 信号的唯一ID。如果向单个资源发送多个信号（例如发信号通知等待条件），则每个信号都需要不同的信息ID。
    * 长度限制：1~64
    * @example `27c7347b-352a-4377-accf-63d361c1ea60`
    */ "UniqueId": string;
    /**
    * 资源逻辑ID，模板定义的名称。
    * @example `WebServer`
    */ "LogicalResourceId": string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~134212~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    "Data"?: string;
}
export { SignalResourceRequest };