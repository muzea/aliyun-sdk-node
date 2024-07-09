export interface ModifyImageSharePermissionRequest {
    /**
     * 镜像ID，仅支持传单个ID。支持自定义镜像和公共镜像。
     * @example `m-5s7qotzavwbrnzaqh4unm****`
     */
    "ImageId": string;
    /**
     * 授权共享镜像的阿里云账号ID，多个账号以半角逗号（,）隔开。
     * @example `1122334455**`
     */
    "AddAccounts"?: string;
    /**
     * 删除镜像共享的阿里云账号ID。仅支持删除单个。
     * @example `113355**`
     */
    "RemoveAccounts"?: string;
}
