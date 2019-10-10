interface DeleteGroupRequest {
    "RegionId"?: string;
    /**
    * 指定待删除的服务器分组ID。
    * @example `11111`
    */ "GroupId": number;
    /**
    * 指定访问源IP地址。
    * @example `127.1.1.1`
    */ "SourceIp"?: string;
}
export { DeleteGroupRequest };