interface ExportImageRequest {
    /**
    * 自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 自定义镜像ID。
    * @example `m-imageid1`
    */ "ImageId": string;
    /**
    * 保存导出镜像的OSS bucket。
    * @example `testexportImage`
    */ "OSSBucket": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 您的OSS  Object的前缀。可以由数字或者字母组成，字符长度为1~30。
    * @example `EcsExport`
    */ "OSSPrefix"?: string;
    /**
    * @example `raw`
    */ "ImageFormat"?: string;
    /**
    * @example `FinanceJoshua`
    */ "RoleName"?: string;
}
export { ExportImageRequest };