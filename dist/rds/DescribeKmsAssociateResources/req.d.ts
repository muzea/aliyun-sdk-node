export interface DescribeKmsAssociateResourcesRequest {
    /**
     * 该参数用于保证请求的幂等性，防止重复提交请求。参数值由客户端生成，保证在不同请求间唯一。
     * 该参数值由ASCII字符组成，最长不超过64个字符，不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfm27qsxjj****`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。可调用[DescribeRegions](~~26243~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * KMS资源所属地域ID。
     * @example `cn-hangzhou`
     */
    "KmsResourceRegionId"?: string;
    /**
     * KMS资源所属的阿里云账号ID。
     * @example `1788966360******`
     */
    "KmsResourceUser": string;
    /**
     * KMS资源类型，当前仅支持**key**（密钥）。
     * @example `key`
     */
    "KmsResourceType": string;
    /**
     * KMS资源ID，当前仅支持密钥ID。
     * @example `a62f78**-65**-4f**-a0**-3ca4def8****`
     */
    "KmsResourceId": string;
}
