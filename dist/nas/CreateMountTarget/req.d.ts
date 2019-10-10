interface CreateMountTargetRequest {
    "RegionId"?: string;
    /**
    * 权限组名称
    * @example `classic-test`
    */ "AccessGroupName": string;
    /**
    * 网络类型，包括 VPC 和 Classic
    * @example `vpc`
    */ "NetworkType": string;
    /**
    * 文件系统 ID
    * @example `174494b666`
    */ "FileSystemId": string;
    /**
    * VPC 网络 ID
    * @example `vpc-2zesj9afh3y518k9oe86q`
    */ "VpcId"?: string;
    /**
    * 交换机 ID
    * @example `vsw-2zevmwkwyztjuoffgdiwl`
    */ "VSwitchId"?: string;
}
export { CreateMountTargetRequest };