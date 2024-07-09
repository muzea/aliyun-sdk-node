export interface DescribeProtocolMountTargetRequest {
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `aBcdg==`
     */
    "NextToken"?: string;
    /**
     * 每次查询结果的个数限制。
     *  - 取值范围：10~100
     * - 默认值：20
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 查询协议服务导出目录的筛选键。
     */
    "Filters"?: {
        /**
         * 筛选键的名称。
         * - ProtocolServiceIds：根据协议服务ID筛选。
         * - ExportIds：根据ExportId筛选。
         * - VpcIds：根据VpcId进行筛选。
         * - VSwitchIds： 根据VSwitchids进行筛选。
         * - FsetIds：根据Fileset ID进行筛选。
         * - Paths：根据挂载点对应的文件系统路径进行筛选。
         * - AccessGroupNames：根据权限组名称进行筛选。
         * @example `ExportIds`
         */
        Key: string;
        /**
         * 筛选键的值。该参数不支持通配符。
         * - Key取值为ProtocolServiceIds时，Value设置为协议服务ID，协议服务ID 最多可设置 10 个。例如`ptc-12345678`或`ptc-12345678,ptc-12345679`。
         * - Key取值为ExportIds时，Value设置为导出目录ID，导出目录ID最多可设置 10 个。例如`exp-12345678`或`exp-12345678,exp-12345679`。
         * - Key取值为VpcIds时，Value设置为协议服务所在的VpcId， Vpc Id最多可设置 10 个。例如 `vpc-12345678`或`vpc-12345678,vpc-12345679`。
         * - Key取值为FsetIds时，Value设置为Fileset ID，Fileset ID 最多可设置 10 个。例如 `fset-12345678`或`fset-12345678,fset-12345679`。
         * - Key取值为Paths时，Value设置为挂载点对应的文件系统目录，Path最多可设置 10 个。例如 `/cpfs/mnt_1/`或`/cpfs/mnt_1/,/cpfs/mnt_2/`。
         * - Key取值为AccessGroupNames时，Value值设置为协议服务的权限组名称，AccessGroupName最多可设置 10 个。例如 `ag-12345678`或`ag-12345678,ag-12345679`。
         * @example `exp-19abf5beab8d****, exp-19acf6beaf7d****`
         */
        Value: string;
    }[];
    /**
     * 保证请求幂等性，从您的客户端生成一个参数值，确保不同的请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * > 若用户未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
