export interface CopyImageRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待复制的镜像ID。
     * @example `m-gx2x1dhsmusr2****`
     */
    "ImageId": string;
    /**
     * 复制出来的新镜像的名称。长度为2\~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（\_）或者短划线（-）。
     * @example `Office_Shanghai`
     */
    "DestinationImageName": string;
    /**
     * 复制镜像目标地域的描述。长度为2\~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `This is a test.`
     */
    "DestinationDescription"?: string;
    /**
     * 复制镜像目标地域的ID，必须与镜像的当前地域ID不同。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-shenzhen`
     */
    "DestinationRegionId": string;
}
