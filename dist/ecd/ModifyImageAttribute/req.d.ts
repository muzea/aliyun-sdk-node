export interface ModifyImageAttributeRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID。
     * @example `m-2g65ljy3ynrdq****`
     */
    "ImageId": string;
    /**
     * 镜像名称。长度为2\~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（\_）或者短划线（-）。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 镜像的描述信息。长度为2\~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `testDescription`
     */
    "Description"?: string;
}
