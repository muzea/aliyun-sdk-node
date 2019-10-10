interface CancelCopyImageRequest {
    /**
    * 目标镜像所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 正在被复制的镜像ID。
    * @example `m-imageid1`
    */ "ImageId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { CancelCopyImageRequest };