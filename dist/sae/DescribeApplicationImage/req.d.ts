interface DescribeApplicationImageRequest {
    "RegionId"?: string;
    /**
    * 应用ID
    * @example `00000000-0000-0000-0000-000000000000`
    */ "AppId": string;
    /**
    * 镜像Url
    * @example `registry-vpc.cn-hangzhou.aliyuncs.com/demo/demo:latest`
    */ "ImageUrl": string;
}
export { DescribeApplicationImageRequest };