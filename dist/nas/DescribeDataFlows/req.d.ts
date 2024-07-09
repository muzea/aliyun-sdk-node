export interface DescribeDataFlowsRequest {
    /**
     * 文件系统ID。
     * - CPFS：必须以`cpfs-`开头，例如cpfs-125487\*\*\*\*。
     * - CPFS智算版：必须以`bmcpfs-`开头，例如bmcpfs-0015\*\*\*\*。
     * >仅中国站支持CPFS文件系统。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 查询数据流动的筛选键。
     */
    "Filters"?: {
        /**
         * 筛选键的名称。取值：
         * - DataFlowIds: 根据DataFlow ID筛选。
         * - FsetIds：根据Fileset ID筛选。
         * - FileSystemPath：根据Fileset在CPFS文件系统中的路径筛选。
         * - SourceStorage：根据源端存储的访问路径筛选。
         * - ThroughputList：根据数据流动的传输带宽筛选。
         * - Description：根据Fileset的描述筛选。
         * - Status：根据数据流动状态筛选。
         * @example `FsetIds`
         */
        Key: string;
        /**
         * 筛选键的值。该参数不支持通配符。
         * - Key取值为DataFlowIds时，Value取值为数据流动ID或数据流动ID的一部分。可以是一个或一组DataFlowId，数据流动ID最多可设置10个。例如，`dfid-12345678`或`dfid-12345678,dfid-12345679`。
         * - 当Key取值为FsetIds时，Value取值为Fileset Id或Fileset ID的部分。可以是一个或一组Fileset ID，Fileset ID最多可设置10个。例如，`fset-12345678`或`fset-12345678,fset-12345679`。
         * - 当Key取值为FileSystemPath时，Value取值为CPFS文件系统中的路径或路径的一部分。长度为1~1024个字符。
         * - 当Key取值为SourceStorage时，Value取值为源端存储的访问路径。最长为1024个字符。
         * - 当Key取值为ThroughputList时，Value取值为数据流动的传输带宽且支持组合查询。
         * - 当Key取值为Description时，Value取值为数据流动的描述或描述的一部分。
         * - 当Key取值为Status时，Value取值为数据流动状态。
         * - 当Key取值为SourceStoragePath时，Value取值为源端存储访问路径或访问路径的一部分。最长1024个字符。
         * @example `FsetIds`
         */
        Value: string;
    }[];
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=`
     */
    "NextToken"?: string;
    /**
     * 每次查询结果的个数。
     * 取值范围：10~100。默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
}
