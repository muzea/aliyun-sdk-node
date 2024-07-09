export interface ModifyImagePermissionRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待共享的镜像ID。
     * @example `m-gx2x1dhsmusr2****`
     */
    "ImageId": string;
    /**
     * 接受镜像共享的阿里云账号ID。可共享给1~50个阿里云账号。
     */
    "AddAccount"?: number[];
    /**
     * 取消镜像共享的阿里云账号ID。可取消共享给1~50个阿里云账号。
     */
    "RemoveAccount"?: number[];
}
