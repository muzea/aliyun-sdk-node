export interface PutSymlinkRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 软链接指向的目标文件。
     * 合法值：命名规范同Object
     *   - TargetObjectName同ObjectName一样，需要对其进行URL编码。
     *   - 软链接的目标文件类型不能为软链接。
     * @example `oss.jpg`
     */
    "x-oss-symlink-target": string;
    /**
     * 指定OSS创建Object时的访问权限。
     * 取值：
     * - default（默认）：Object遵循所在存储空间的访问权限。
     * - private：Object是私有资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户没有权限操作该Object。
     * - public-read：Object是公共读资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户只有该Object的读权限。请谨慎使用该权限。
     * - public-read-write：Object是公共读写资源。所有用户都有该Object的读写权限。请谨慎使用该权限。
     * 关于访问权限的更多信息，请参见**[读写权限ACL](~~100676~~)**。
     */
    "x-oss-object-acl"?: any;
    /**
     * 指定Object的存储类型。
     * 对于任意存储类型的Bucket，如果上传Object时指定此参数，则此次上传的Object将存储为指定的类型。例如在IA类型的Bucket中上传Object时，如果指定**x-oss-storage-class**为Standard，则该Object直接存储为Standard。
     * 取值：
     * - Standard：标准存储
     * - IA：低频访问
     * - Archive：归档存储
     * IA与Archive类型的单个Object大小如果不足64 KB，则会按64 KB计量计费。建议在使用PutSymlink接口时不要将Object的存储类型指定为IA或Archive。
     * 关于存储类型的更多信息，请参见**[存储类型介绍](~~51374~~)**。
     */
    "x-oss-storage-class"?: any;
    /**
     * 指定PutSymlink操作时是否覆盖同名Object。
     *   - 不指定**x-oss-forbid-overwrite**或者指定**x-oss-forbid-overwrite**为**false**时，表示允许覆盖同名Object。
     *   - 指定**x-oss-forbid-overwrite**为**true**时，表示禁止覆盖同名Object。
     * 设置**x-oss-forbid-overwrite**请求Header会导致QPS处理性能下降，如果您有大量的操作需要使用**x-oss-forbid-overwrite**请求Header（QPS>1000），请联系技术支持，避免影响您的业务。
     * > 当目标Bucket处于已开启或已暂停版本控制状态时，**x-oss-forbid-overwrite**请求Header设置无效，即允许覆盖同名Object。
     * @example `true`
     */
    "x-oss-forbid-overwrite"?: string;
}
