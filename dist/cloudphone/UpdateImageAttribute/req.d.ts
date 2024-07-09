export interface UpdateImageAttributeRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 授权共享镜像的阿里云账号ID列表。列表最多10个元素。
     * @example `123456******`
     */
    "AddAccount"?: string[];
    /**
     * 删除镜像共享的阿里云账号ID列表。列表最多10个元素。
     * @example `987654******`
     */
    "RemoveAccount"?: string[];
    /**
     * 镜像ID。
     * @example `cpm-xxxxxxxx`
     */
    "ImageId": string;
    /**
     * 自定义镜像的名称。包含2~128个字符。必须以大小字母或中文开头，可包含数字、半角冒号（:）、下划线（_）或者连字符（-）。不能以`http://`和`https://`开头。默认值：空，表示保持原有名称不变。
     * @example `newImageName`
     */
    "ImageName"?: string;
    /**
     * 自定义镜像的描述信息。能包含2~256个字符。不能以`http://`和`https://`开头。默认值：空，表示保持原有描述信息不变。
     * @example `newDescription`
     */
    "Description"?: string;
}
