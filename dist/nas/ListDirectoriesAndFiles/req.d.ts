export interface ListDirectoriesAndFilesRequest {
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId": string;
    /**
     * 指定目录的绝对路径。
     * 必须以正斜线（/）开头，并且是挂载点中真实存在的路径。
     * @example `/pathway/to/folder`
     */
    "Path": string;
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=	`
     */
    "NextToken"?: string;
    /**
     * 分级存储类型。
     * - InfrequentAccess：低频存储。
     * - Archive：归档存储。
     * - All：查询所有存储数据。
     * > 当StorageType取值为ALL时，必须配置DirectoryOnly参数，且值为true.
     * @example `InfrequentAccess`
     */
    "StorageType": string;
    /**
     * 是否只查询目录。
     * 取值：
     * - false（默认值）：否，可以查询目录或文件
     * - true：是，只查询目录
     * > 当StorageType取值为All时，DirectoryOnly取值为true，不能为false。
     * @example `false`
     */
    "DirectoryOnly"?: boolean;
    /**
     * 每次查询结果中包含的目录或文件的个数。
     * 取值范围：10~128
     * 默认值：100
     * @example `100`
     */
    "MaxResults"?: number;
}
