export interface DescribeFilesetsRequest {
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 待查询Fileset的筛选键信息。
     */
    "Filters"?: {
        /**
         * 筛选键的名称。取值：
         * - FsetIds：根据Fileset ID筛选。
         * - FileSystemPath：根据Fileset在CPFS文件系统中的路径筛选。
         * - Description：根据Fileset的描述筛选。
         * @example `FsetIds`
         */
        Key: string;
        /**
         * 筛选键的值。该参数不支持通配符。
         * - 当Key取值为FsetIds时，Value取值为Fileset ID或Fileset ID的部分。可以是一个或一组Fileset ID，Fileset ID最多可设置10个。例如，`fset-12345678`或`fset-12345678,fset-12345679`。
         * - 当Key取值为FileSystemPath时，Value取值为Fileset在CPFS文件系统中的路径或路径的一部分。长度为2~1024个英文或中文字符。请您使用UTF-8编码。
         * - 当Key取值为Description时，Value取值为Fileset的描述或描述的一部分。
         * @example `fset-12345678,fset-12345679`
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
