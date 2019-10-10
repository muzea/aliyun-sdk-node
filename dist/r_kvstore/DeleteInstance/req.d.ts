interface DeleteInstanceRequest {
    "RegionId"?: string;
    /**
    * 要删除的实例的ID。
    * @example `r-j6cxxxxxxxxxx3d4`
    */ "InstanceId": string;
    /**
    * @example `5464564564564564`
    */ "OwnerId"?: number;
}
export { DeleteInstanceRequest };