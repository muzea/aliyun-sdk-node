export interface QueryIncidentIconListResponse {
    /**
     * 本次请求获取的实体与边的列表。
     */
    InfoList: {
        /**
         * 本次请求获取的边列表。
         */
        RelationTypeList: {
            /**
             * 该边的方向。取值：
             * - **1**：正向
             * - **0**：反向
             * @example `1`
             */
            Directed: string;
            /**
             * 该边的更新时间。
             * @example `2023-01-04T17:35Z`
             */
            GmtModified: string;
            /**
             * 该边的展示模板。
             * @example `test_template`
             */
            DisplayTemplate: string;
            /**
             * 该边的名称。
             * @example `policy-auto-effs3b`
             */
            Name: string;
            /**
             * 该边的命名空间。
             * @example `lkl-zf-bs-lams`
             */
            Namespace: string;
            /**
             * 该边的展示类型。
             * @example `0`
             */
            ShowType: string;
            /**
             * 该边的id。
             * @example `4556****`
             */
            Id: string;
            /**
             * 该边的展示颜色。
             * @example `#FFF`
             */
            DisplayColor: string;
            /**
             * 该边的创建时间。
             * @example `167660031*****`
             */
            GmtCreate: string;
            /**
             * 该边的图标。
             * @example `https://img.alicdn.com/imgextra/i4/O1CN01ft6rvQ22uUX2JsTmv_!!600000******-55-tps-12-12.svg`
             */
            DisplayIcon: string;
        }[];
        /**
         * 本次请求获取的实体列表。
         */
        EntityTypeList: {
            /**
             * 该实体的修改时间。
             * @example `2022-01-11T10:16Z`
             */
            GmtModified: string;
            /**
             * 该实体的展示模板。
             * @example `[{&quot;name&quot;:&quot;${sas.trace2.name.logtime}&quot;,&quot;value&quot;:&quot;$!{time}&quot;},{&quot;name&quot;:&quot;${sas.trace2.name.node_type}&quot;,&quot;value&quot;:&quot;${sas.trace2.name.ip}&quot;},{&quot;name&quot;:&quot;${sas.trace2.property.name}&quot;,&quot;value&quot;:&quot;$!{name}&quot;}#if($p_log_time),{&quot;name&quot;:&quot;${sas.trace2.property.log_time}&quot;,&quot;value&quot;:&quot;$!{p_log_time}&quot;}#end#if($p_pid),{&quot;name&quot;:&quot;${sas.trace2.property.pid}&quot;,&quot;value&quot;:&quot;$!{p_pid}&quot;}#end#if($p_procname),{&quot;name&quot;:&quot;${sas.trace2.property.procname}&quot;,&quot;value&quot;:&quot;$!{p_procname}&quot;}#end#if($p_proc_path),{&quot;name&quot;:&quot;${sas.trace2.property.proc_path}&quot;,&quot;value&quot;:&quot;$!{p_proc_path}&quot;}#end#if($p_cmdline),{&quot;name&quot;:&quot;${sas.trace2.property.cmdline}&quot;,&quot;value&quot;:&quot;$!{p_cmdline}&quot;}#end#if($p_username),{&quot;name&quot;:&quot;${sas.trace2.property.username}&quot;,&quot;value&quot;:&quot;$!{p_username}&quot;}#end#if($p_cwd),{&quot;name&quot;:&quot;${sas.trace2.property.cwd}&quot;,&quot;value&quot;:&quot;$!{p_cwd}&quot;}#end#if($p_filepath),{&quot;name&quot;:&quot;${sas.trace2.property.filepath}&quot;,&quot;value&quot;:&quot;$!{p_filepath}&quot;}#end#if($p_md5),{&quot;name&quot;:&quot;${sas.trace2.property.md5}&quot;,&quot;value&quot;:&quot;$!{p_md5}&quot;}#end#if($p_ctime),{&quot;name&quot;:&quot;${sas.trace2.property.ctime}&quot;,&quot;value&quot;:&quot;$!{p_ctime}&quot;}#end#if($p_mtime),{&quot;name&quot;:&quot;${sas.trace2.property.mtime}&quot;,&quot;value&quot;:&quot;$!{p_mtime}&quot;}#end#if($p_size),{&quot;name&quot;:&quot;${sas.trace2.property.size}&quot;,&quot;value&quot;:&quot;$!{p_size}&quot;}#end#if($p_port),{&quot;name&quot;:&quot;${sas.trace2.property.port}&quot;,&quot;value&quot;:&quot;$!{p_port}&quot;}#end#if($p_ip),{&quot;name&quot;:&quot;${sas.trace2.property.ip}&quot;,&quot;value&quot;:&quot;$!{p_ip}&quot;}#end#if($p_src_ip),{&quot;name&quot;:&quot;${sas.trace2.property.src_ip}&quot;,&quot;value&quot;:&quot;$!{p_src_ip}&quot;}#end#if($p_dst_ip),{&quot;name&quot;:&quot;${sas.trace2.property.dst_ip}&quot;,&quot;value&quot;:&quot;$!{p_dst_ip}&quot;}#end#if($p_host),{&quot;name&quot;:&quot;${sas.trace2.property.host}&quot;,&quot;value&quot;:&quot;$!{p_host}&quot;}#end#if($p_uri),{&quot;name&quot;:&quot;${sas.trace2.property.uri}&quot;,&quot;value&quot;:&quot;$!{p_uri}&quot;}#end#if($p_post_data),{&quot;name&quot;:&quot;${sas.trace2.property.post_data}&quot;,&quot;value&quot;:&quot;$!{p_post_data}&quot;}#end#if($p_content),{&quot;name&quot;:&quot;${sas.trace2.property.content}&quot;,&quot;value&quot;:&quot;$!{p_content}&quot;}#end#if($p_type),{&quot;name&quot;:&quot;${sas.trace2.property.type}&quot;,&quot;value&quot;:&quot;$!{p_type}&quot;}#end]",
                               `
             */
            DisplayTemplate: string;
            /**
             * 该实体的图标。
             * @example `https://img.alicdn.com/imgextra/i4/O1CN011BZBvK1oifgsWIXoO_!!60000*****-55-tps-32-32.svg`
             */
            DisplayIcon: string;
            /**
             * 该实体是否虚拟节点。取值：
             * - **1**： 是虚拟节点
             * - **0**： 不是虚拟节点
             * @example `0`
             */
            IsVirtualNode: string;
            /**
             * 该实体的展示顺序。
             * @example `5`
             */
            DisplayOrder: string;
            /**
             * 该实体的名称。
             * @example `shujuku`
             */
            Name: string;
            /**
             * 该实体的命名空间。
             * @example `kube-system`
             */
            Namespace: string;
            /**
             * 该实体是否可溯源。
             * @example `1`
             */
            TraceSuccessFlag: string;
            /**
             * 该实体的ID。
             * @example `8038****`
             */
            Id: string;
            /**
             * 该实体的展示颜色。
             * @example `#fff`
             */
            DisplayColor: string;
            /**
             * 该实体的创建时间。
             * @example `2022-12-08T15:27Z`
             */
            GmtCreate: string;
        }[];
    };
    /**
     * 本次请求的状态。取值：
     * - **true**: 接口调用成功
     * - **false**: 接口调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次请求返回的结果Code。取值：
     * - **200**表示本次请求成功
     * - **400** 表示本次请求失败
     * @example `200`
     */
    Code: string;
    /**
     * 本次请求提示消息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `09969D2C-4FAD-429E-BFBF-9A60DEF8****`
     */
    RequestId: string;
    /**
     * 本次请求返回的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次请求消耗时间。单位：秒。
     * @example `1`
     */
    TimeCost: number;
}
