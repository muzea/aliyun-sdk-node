interface CreateFileSystemRequest {
    "RegionId"?: string;
    /**
    * 使用的协议类型，目前包含 NFS和 SMB
    * @example `NFS`
    */ "ProtocolType": string;
    "ZoneId"?: string;
    /**
    * 文件系统类别，目前包含 Performance（性能型）和 Capacity（容量型）
    * @example `Performance`
    */ "StorageType": string;
    /**
    * 文件系统描述，长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）
    * @example `balabala`
    */ "Description"?: string;
}
export { CreateFileSystemRequest };