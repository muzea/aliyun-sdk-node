export interface UpdateKmsInstanceBindVpcRequest {
    /**
     * KMS实例的ID。
     * @example `kst-phzz64f722a1buamw0****`
     */
    "KmsInstanceId": string;
    /**
     * VPC配置，每个VPC包含如下内容：
     * - VpcId：VPC的ID。
     * - VSwitchId：VPC下的交换机。
     * - RegionID：VPC所属的地域。
     * - VpcOwnerId：VPC所属的阿里云账号。
     * 格式为`[{"VpcId":"${VpcId}","VSwitchId":"${VSwitchId}","RegionId":"${RegionId}","VpcOwnerId":${VpcOwnerId}},...]`。
     * @example `[{"VpcId":"vpc-bp1go9qvmj78j4f4c****","VSwitchId":"vsw-bp16c5pvvcf0fp5b9****","RegionId":"cn-hangzhou","VpcOwnerId":120708975881****},{"VpcId":"vpc-bp14c07ucxg6h1xjm****","VSwitchId":"vsw-bp1wujtnspi1l3gvu****","RegionId":"cn-hangzhou","VpcOwnerId":119285303511****}]`
     */
    "BindVpcs": string;
}
