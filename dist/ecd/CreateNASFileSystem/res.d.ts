export interface CreateNASFileSystemResponse {
    /**
     * NAS文件系统ID。
     * @example `04f314****`
     */
    FileSystemId: string;
    /**
     * NAS文件系统名称。
     * @example `testNAS`
     */
    FileSystemName: string;
    /**
     * 挂载点域名。
     * @example `04f314****-at***.cn-hangzhou.nas.aliyuncs.com`
     */
    MountTargetDomain: string;
    /**
     * 请求ID。
     * @example `269BDB16-2CD8-4865-84BD-11C40BC21DB0`
     */
    RequestId: string;
    /**
     * 工作区ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    OfficeSiteId: string;
}
