interface ListPackageRequest {
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
    * @example `package1`
    */ "packageName"?: string;
    /**
    * package类型：
    * JAR   jar包；
    * DICTIONARY  字典；
    * SCRIPT  脚本；
    * PYTHON  python的py文件或者zip包
    * @example `JAR`
    */ "type"?: string;
    /**
    * 分页属性，每页包含package数量
    * @example `10`
    */ "pageSize"?: number;
    /**
    * 分页属性，第几页
    * @example `1`
    */ "pageIndex"?: number;
    "tag"?: string;
}
export { ListPackageRequest };