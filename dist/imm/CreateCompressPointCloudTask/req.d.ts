export interface CreateCompressPointCloudTaskRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 点云文件的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test/src/test.pcd`
     */
    "SourceURI": string;
    /**
     * 压缩后输出文件的OSS地址。
     * OSS地址规则为oss://${Bucket}/${Object}，其中`${Bucket}`为和当前项目处于同一区域(Region)的OSS Bucket名称，`${Object}`为包含文件扩展名的文件完整路径。
     * @example `oss://test/tgt`
     */
    "TargetURI": string;
    /**
     * 点云文件格式。当前只支持PCD格式，默认值为pcd。
     * @example `pcd`
     */
    "PointCloudFileFormat"?: string;
    /**
     * 压缩算法名称。取值如下：
     * - octree：八叉树
     * - kdtree：K-d树
     * @example `octree`
     */
    "CompressMethod": string;
    /**
     * 参与压缩的PCD属性字段以及压缩顺序，压缩完成后以此顺序进行解压数据。
     * - 若采用PCL库Octree压缩，则支持\["xyz"]
     * - 若采用Draco库Kdtree压缩，则支持\["xyz"]或者\["xyz", "intensity"]
     */
    "PointCloudFields": string[];
    /**
     * Kdtree压缩参数。
     */
    "KdtreeOption"?: any;
    /**
     * Octree压缩参数。
     */
    "OctreeOption"?: any;
    /**
     * 用户自定义信息，在异步消息通知中会为您返回，方便您系统内对消息通知进行关联处理。最大长度为2048字节。
     * @example `{"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}`
     */
    "UserData"?: string;
    /**
     * 自定义标签，用于对异步任务进行搜索、过滤。
     * @example `{"LabelKey": "Value"}`
     */
    "Tags"?: any;
    /**
     * 链式授权配置，非必填。更多信息，请参见[使用链式授权访问其他实体资源](~~465340~~)。
     */
    "CredentialConfig"?: any;
    /**
     * 消息通知配置，详细内容请单击Notification查看，异步通知消息格式请参见[异步通知消息格式](~~471456~~)。
     */
    "Notification"?: any;
}
