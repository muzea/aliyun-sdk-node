interface DeleteAddressBookRequest {
    "RegionId"?: string;
    /**
    * 地址簿唯一ID。指定待删除地址簿的ID。
    * @example `0657ab9d-fe8b-4174-b2a6-6baf358ea4ad`
    */ "GroupUuid": string;
    /**
    * 访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定请求和接收消息的语言类型。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
}
export { DeleteAddressBookRequest };