interface ResizeDiskRequest {
    "RegionId"?: string;
    /**
    * 磁盘 ID。
    * @example `d-diskid1`
    */ "DiskId": string;
    /**
    * 希望扩容到的磁盘容量大小。单位为 GiB。取值范围：
    * - 普通云盘（Cloud）：5~2000
    * - 高效云盘（Cloud_efficiency）：5~2000
    * - SSD 云盘（Cloud_ssd）：5~2000
    * 指定的新磁盘容量必须比原磁盘容量大。且 2 TB 以下的磁盘不能扩容到 2 TB 以上。
    * @example `2100`
    */ "NewSize": number;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 是否在线扩容磁盘。取值范围：
    * - online：在线扩容，实例无需重启便能完成扩容。
    * - offline（默认）：离线扩容，您需要重启实例以完成扩容。
    * @example `online`
    */ "Type"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken** 只支持 ASCII 字符，且不能超过 64 个字符。更多详情，请参阅 [如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
}
export { ResizeDiskRequest };