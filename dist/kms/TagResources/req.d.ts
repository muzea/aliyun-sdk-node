export interface TagResourcesRequest {
    /**
     * 资源所属的地域ID。
     * >您可以调用[DescribeRegions](~~601478~~)查看当前阿里云账号的可用地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要绑定标签的资源类型。取值：
     * - key：密钥
     * - secret：凭据
     * @example `key`
     */
    "ResourceType": string;
    /**
     * 要绑定标签的资源ID列表，最多可以输入50个资源ID。
     * 输入多个资源ID时，格式为`["ResourceId.1","ResourceId.2",...]`。
     */
    "ResourceId": string[];
    /**
     * 标签列表，最多可以输入20个标签。
     * 每个标签由一个键值对（Key:Value）组成，包含标签键（Key）、标签值（Value）。
     * 输入多个标签时，格式为`[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},...]`。
     */
    "Tag": {
        /**
         * 标签键。每个标签由一个键值对（Key:Value）组成，包含标签键（Key）、标签值（Value）。
         * 最多可以输入20个标签。输入多个标签时，格式为`[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},...]`。
         * 每个标签键最多支持128个字符，可以包含英文大小写字母、数字、正斜线（/）、反斜线（\）、下划线（_）、短划线（-）、半角句号（.）、加号（+）、等于号（=）、半角冒号（:）、字符at（@）。
         * >标签键不能以aliyun或acs:开头。
         * @example `disk-encryption`
         */
        Key: string;
        /**
         * 标签值。每个标签由一个键值对（Key:Value）组成，包含标签键（Key）、标签值（Value）。
         * 最多可以输入20个标签。输入多个标签时，格式为`[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},...]`。
         * 每个标签值最多支持128个字符，可以包含英文大小写字母、数字、正斜线（/）、反斜线（\）、下划线（_）、短划线（-）、半角句号（.）、加号（+）、等于号（=）、半角冒号（:）、字符at（@）。
         * @example `true`
         */
        Value: string;
    }[];
}
