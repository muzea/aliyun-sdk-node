interface CreatePackageRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
    /**
    * package名称
    * @example `package1.jar`
    */ "packageName"?: string;
    /**
    * package 类型：
    * JAR  jar包；
    * DICTIONARY 字典（普通文件）；
    * SCRIPT 脚本；
    * PYTHON python文件或者zip包
    * @example `JAR`
    */ "type"?: string;
    /**
    * OSS接入点
    * @example `oss-cn-hangzhou-internal.aliyuncs.com`
    */ "ossEndpoint"?: string;
    /**
    * OSSBucket
    * @example `blinktest2.oss-cn-hangzhou-internal.aliyuncs.com`
    */ "ossBucket"?: string;
    /**
    * OSS所有者
    * @example `user1`
    */ "ossOwner"?: string;
    /**
    * package在oss中的路径
    * @example `/path1/path2`
    */ "ossPath"?: string;
    /**
    * package别名
    * @example `package2`
    */ "originName"?: string;
    /**
    * package的备注描述
    * @example `test`
    */ "description"?: string;
    /**
    * package的md5值
    * @example `md5值`
    */ "md5"?: string;
    "tag"?: string;
}
export { CreatePackageRequest };