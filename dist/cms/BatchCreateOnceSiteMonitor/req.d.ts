export interface BatchCreateOnceSiteMonitorRequest {
    "TaskList": {
        Address: string;
        IspCities: string;
        OptionsJson: string;
        TaskName: string;
        TaskType: string;
    }[];
}
