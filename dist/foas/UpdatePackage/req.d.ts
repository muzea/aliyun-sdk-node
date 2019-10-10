interface UpdatePackageRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * package名称
    * @example `package1.jar`
    */ "packageName": string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
    /**
    * oss接入点
    * @example `oss-cn-hangzhou-internal.aliyuncs.com`
    */ "ossEndpoint"?: string;
    /**
    * ossBucket
    * @example `blinktest2.oss-cn-hangzhou-internal.aliyuncs.com`
    */ "ossBucket"?: string;
    /**
    * oss所有者
    * @example `xxxx`
    */ "ossOwner"?: string;
    /**
    * oss路径
    * @example `/path1/path2`
    */ "ossPath"?: string;
    /**
    * package别名
    * @example `package2.jar`
    */ "originName"?: string;
    /**
    * package注释描述
    * @example `test`
    */ "description"?: string;
    /**
    * package的md5值
    * @example `md5值`
    */ "md5"?: string;
    /**
    * package的标记
    * @example `xxxx`
    */ "tag"?: string;
}
export { UpdatePackageRequest };