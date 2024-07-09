export interface CreateBackupPolicyRequest {
    /**
     * 设置要创建的防护策略的名称。
     * @example `ServerBackUpPolicy01`
     */
    "Name": string;
    /**
     * - **IsDefault**：要新建的防护策略的类型。取值：
     *     - **1**：推荐策略
     *     - **0**：自定义策略
     * - **Include**：要防护的文件类型。防护全部文件类型时，该参数设置为[]。
     * - **Source**：要防护的服务器目录。需要防护全部目录时，该参数设置为[]。
     * - **ExcludeSystemPath**：设置是否排除指定目录。要排除该参数设置为**true**，不排除则无需设置该参数。
     * - **Exclude**：设置指定的防护目录地址。不设置指定防护目录地址时，该参数设置为[]。
     * - **Schedule**：设置数据备份任务的执行时间和执行间隔。建议指定在业务低峰期非整点。设置示例如下：
     *     - 例1：I|1583216092|P21D表示数据备份开始时间为2020-03-03 14:14:52，备份策略执行间隔为3周。
     *     - 例2：I|1583216092|PT24H表示数据备份开始时间为2020-03-03 14:14:52，备份策略执行间隔为24小时。
     * - **Retention**：设置备份数据保留时间，单位为天。7表示1周，365表示1年，-1表示永久。
     * -  **SpeedLimiter**：设置备份网络带宽限制。例如：0:24:30720表示0~24时备份网络带宽限制为30 MByte/s。
     * - **UseVss**：是否启用VSS（Windows）功能。取值：
     *     -  **true**：启用
     *     -  **false**：不启用
     * > VSS（Windows）功能仅为Windows系统开启，开启后会有效降低因进程占用导致的个别文件备份失败的问题，建议开启。启用该功能后，将不支持exFAT和FAT32磁盘格式的文件备份。
     * @example `"{"IsDefault":1,"Include":[],"Source":[],"Schedule":"I|1648061040|PT24H","Retention":7,"SpeedLimiter":"","ExcludeSystemPath":true,"Exclude":["/bin/","/usr/bin/","/sbin/","/boot/","/proc/","/sys/","/srv/","/lib/","/selinux/","/usr/sbin/","/run/","/lib32/","/lib64/","/lost+found/","/var/lib/kubelet/","/var/lib/ntp/proc","/var/lib/container","Windows","Python27","Program Files (x86)","Program Files","Boot","$RECYCLE.BIN","System Volume Information","Users\Administrator\NTUSER.DAT*","ProgramData","pagefile.sys","Users\Default\NTUSER.DAT*","Users\Administrator\ntuser.*"],"UseVss":true}"`
     */
    "Policy": any;
    /**
     * 防护策略的版本。固定取值**2.0.0**。
     * @example `2.0.0`
     */
    "PolicyVersion": string;
    /**
     * 非阿里云服务器所在的地域ID。
     * > 您可以调用[DescribeSupportRegion](~~DescribeSupportRegion~~)接口查看防勒索支持的地域，然后根据您的非阿里云服务器所在的地域就近选择防勒索支持的地域。
     * @example `ch-hangzhou`
     */
    "PolicyRegionId"?: string;
    /**
     * 指定需要防护的服务器UUID集合。
     * @example `["3bb30859-b3b5-4f28-868f-b0892c98****", "3bb30859-b3b5-4f28-868f-b0892c98****"]`
     */
    "UuidList": string[];
}
