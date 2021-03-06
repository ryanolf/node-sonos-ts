/**
 * Sonos AlarmClockService
 *
 * Stephan van Rooij
 * https://svrooij.io
 *
 * This file is generated, do not edit manually. https://svrooij.io/sonos-api-docs
 */
import BaseService from './base-service';
import ArrayHelper from '../helpers/array-helper';
import MetadataHelper from '../helpers/metadata-helper';
import XmlHelper from '../helpers/xml-helper';
import { SonosUpnpError } from '../models/sonos-upnp-error';
import SonosUpnpErrors from './sonos-upnp-errors';
import {
  Alarm, PatchAlarm, PlayMode, Track,
} from '../models';

/**
 * Control the sonos alarms
 *
 * @export
 * @class AlarmClockServiceBase
 * @extends {BaseService}
 */
export class AlarmClockServiceBase extends BaseService<AlarmClockServiceEvent> {
  readonly serviceNane: string = 'AlarmClock';

  readonly controlUrl: string = '/AlarmClock/Control';

  readonly eventSubUrl: string = '/AlarmClock/Event';

  readonly scpUrl: string = '/xml/AlarmClock1.xml';

  /**
   * Default errors and service specific errors
   *
   * @type {SonosUpnpError[]}
   * @remarks See https://svrooij.io/sonos-api-docs/#manual-documentation-file
   */
  readonly errors: SonosUpnpError[] = [
    ...SonosUpnpErrors.defaultErrors,
    { code: 801, description: 'Duplicate alarm time' },
  ];

  // #region actions
  /**
   * Create a single alarm, all properties are required
   *
   * @param {string} input.StartLocalTime - The start time as hh:mm:ss
   * @param {string} input.Duration - The duration as hh:mm:ss
   * @param {string} input.Recurrence - Repeat this alarm on [ 'ONCE' / 'WEEKDAYS' / 'WEEKENDS' / 'DAILY' ]
   * @param {boolean} input.Enabled - Alarm enabled after creation
   * @param {string} input.RoomUUID - The UUID of the speaker you want this alarm for
   * @param {string} input.ProgramURI - The sound uri
   * @param {Track | string} input.ProgramMetaData - The sound metadata, can be empty string
   * @param {PlayMode} input.PlayMode - Alarm play mode [ 'NORMAL' / 'REPEAT_ALL' / 'SHUFFLE_NOREPEAT' / 'SHUFFLE' ]
   * @param {number} input.Volume - Volume between 0 and 100
   * @param {boolean} input.IncludeLinkedZones - Should grouped players also play the alarm?
   */
  async CreateAlarm(input: { StartLocalTime: string; Duration: string; Recurrence: string; Enabled: boolean; RoomUUID: string; ProgramURI: string; ProgramMetaData: Track | string; PlayMode: PlayMode; Volume: number; IncludeLinkedZones: boolean }):
  Promise<CreateAlarmResponse> { return await this.SoapRequestWithBody<typeof input, CreateAlarmResponse>('CreateAlarm', input); }

  /**
   * Delete an alarm
   *
   * @param {number} input.ID - The Alarm ID, see ListAndParseAlarms
   */
  async DestroyAlarm(input: { ID: number }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('DestroyAlarm', input); }

  async GetDailyIndexRefreshTime():
  Promise<GetDailyIndexRefreshTimeResponse> { return await this.SoapRequest<GetDailyIndexRefreshTimeResponse>('GetDailyIndexRefreshTime'); }

  async GetFormat():
  Promise<GetFormatResponse> { return await this.SoapRequest<GetFormatResponse>('GetFormat'); }

  async GetHouseholdTimeAtStamp(input: { TimeStamp: string }):
  Promise<GetHouseholdTimeAtStampResponse> { return await this.SoapRequestWithBody<typeof input, GetHouseholdTimeAtStampResponse>('GetHouseholdTimeAtStamp', input); }

  async GetTimeNow():
  Promise<GetTimeNowResponse> { return await this.SoapRequest<GetTimeNowResponse>('GetTimeNow'); }

  async GetTimeServer():
  Promise<GetTimeServerResponse> { return await this.SoapRequest<GetTimeServerResponse>('GetTimeServer'); }

  async GetTimeZone():
  Promise<GetTimeZoneResponse> { return await this.SoapRequest<GetTimeZoneResponse>('GetTimeZone'); }

  async GetTimeZoneAndRule():
  Promise<GetTimeZoneAndRuleResponse> { return await this.SoapRequest<GetTimeZoneAndRuleResponse>('GetTimeZoneAndRule'); }

  async GetTimeZoneRule(input: { Index: number }):
  Promise<GetTimeZoneRuleResponse> { return await this.SoapRequestWithBody<typeof input, GetTimeZoneRuleResponse>('GetTimeZoneRule', input); }

  /**
   * Get the AlarmList as XML, use ListAndParseAlarms for parsed version
   */
  async ListAlarms():
  Promise<ListAlarmsResponse> { return await this.SoapRequest<ListAlarmsResponse>('ListAlarms'); }

  async SetDailyIndexRefreshTime(input: { DesiredDailyIndexRefreshTime: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetDailyIndexRefreshTime', input); }

  async SetFormat(input: { DesiredTimeFormat: string; DesiredDateFormat: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetFormat', input); }

  async SetTimeNow(input: { DesiredTime: string; TimeZoneForDesiredTime: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetTimeNow', input); }

  async SetTimeServer(input: { DesiredTimeServer: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetTimeServer', input); }

  async SetTimeZone(input: { Index: number; AutoAdjustDst: boolean }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetTimeZone', input); }

  /**
   * Update an alarm, all parameters are required. Use PatchAlarm where you can update a single parameter
   *
   * @param {number} input.ID - The ID of the alarm see ListAndParseAlarms
   * @param {string} input.StartLocalTime - The start time as hh:mm:ss
   * @param {string} input.Duration - The duration as hh:mm:ss
   * @param {string} input.Recurrence - Repeat this alarm on [ 'ONCE' / 'WEEKDAYS' / 'WEEKENDS' / 'DAILY' ]
   * @param {boolean} input.Enabled - Alarm enabled after creation
   * @param {string} input.RoomUUID - The UUID of the speaker you want this alarm for
   * @param {string} input.ProgramURI - The sound uri
   * @param {Track | string} input.ProgramMetaData - The sound metadata, can be empty string
   * @param {PlayMode} input.PlayMode - Alarm play mode [ 'NORMAL' / 'REPEAT_ALL' / 'SHUFFLE_NOREPEAT' / 'SHUFFLE' ]
   * @param {number} input.Volume - Volume between 0 and 100
   * @param {boolean} input.IncludeLinkedZones - Should grouped players also play the alarm?
   */
  async UpdateAlarm(input: { ID: number; StartLocalTime: string; Duration: string; Recurrence: string; Enabled: boolean; RoomUUID: string; ProgramURI: string; ProgramMetaData: Track | string; PlayMode: PlayMode; Volume: number; IncludeLinkedZones: boolean }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('UpdateAlarm', input); }
  // #endregion

  // Event properties from service description.
  protected eventProperties(): {[key: string]: string} {
    return {
      AlarmListVersion: 'string',
      DailyIndexRefreshTime: 'string',
      DateFormat: 'string',
      TimeFormat: 'string',
      TimeGeneration: 'number',
      TimeServer: 'string',
      TimeZone: 'string',
    };
  }
}

// Generated responses
export interface CreateAlarmResponse {
  AssignedID: number;
}

export interface GetDailyIndexRefreshTimeResponse {
  CurrentDailyIndexRefreshTime: string;
}

export interface GetFormatResponse {
  CurrentTimeFormat: string;
  CurrentDateFormat: string;
}

export interface GetHouseholdTimeAtStampResponse {
  HouseholdUTCTime: string;
}

export interface GetTimeNowResponse {
  CurrentUTCTime: string;
  CurrentLocalTime: string;
  CurrentTimeZone: string;
  CurrentTimeGeneration: number;
}

export interface GetTimeServerResponse {
  CurrentTimeServer: string;
}

export interface GetTimeZoneResponse {
  Index: number;
  AutoAdjustDst: boolean;
}

export interface GetTimeZoneAndRuleResponse {
  Index: number;
  AutoAdjustDst: boolean;
  CurrentTimeZone: string;
}

export interface GetTimeZoneRuleResponse {
  TimeZone: string;
}

export interface ListAlarmsResponse {
  CurrentAlarmList: string;
  CurrentAlarmListVersion: string;
}

// Strong type event
export interface AlarmClockServiceEvent {
  AlarmListVersion?: string;
  DailyIndexRefreshTime?: string;
  DateFormat?: string;
  TimeFormat?: string;
  TimeGeneration?: number;
  TimeServer?: string;
  TimeZone?: string;
}

/**
 * Extended AlarmClockService
 *
 * @export
 * @class AlarmClockService
 * @extends {AlarmClockServiceBase}
 */
export class AlarmClockService extends AlarmClockServiceBase {
  /**
   * Get a parsed list of all alarms.
   *
   * @returns {Promise<Alarm[]>}
   * @memberof SonosDevice
   */
  public async ListAndParseAlarms(): Promise<Alarm[]> {
    const alarmList = await super.ListAlarms();
    const parsedList = XmlHelper.DecodeAndParseXml(alarmList.CurrentAlarmList, '');
    const alarms = ArrayHelper.ForceArray<any>(parsedList.Alarms.Alarm);
    const results: Array<Alarm> = [];
    alarms.forEach((alarm: any) => {
      results.push({
        Duration: alarm.Duration,
        Enabled: alarm.Enabled === '1',
        ID: parseInt(alarm.ID, 10),
        IncludeLinkedZones: alarm.IncludeLinkedZones === '1',
        PlayMode: alarm.PlayMode,
        ProgramMetaData: MetadataHelper.ParseDIDLTrack(XmlHelper.DecodeAndParseXml(alarm.ProgramMetaData), this.host, this.port),
        ProgramURI: XmlHelper.DecodeTrackUri(alarm.ProgramURI),
        Recurrence: alarm.Recurrence,
        RoomUUID: alarm.RoomUUID,
        StartLocalTime: alarm.StartTime,
        Volume: parseInt(alarm.Volume, 10),
      } as Alarm);
    });
    return results;
  }

  /**
   * Patch a single alarm. Only the ID and one property you want to change are required.
   *
   * @param {PatchAlarm} [options]
   * @param {number} options.ID The ID of the alarm to update
   * @param {string | undefined} options.StartLocalTime The time the alarm has to start 'hh:mm:ss'
   * @param {string | undefined} options.Duration The duration of the alarm 'hh:mm:ss'
   * @param {string | undefined} options.Recurrence What should the recurrence be ['DAILY','ONCE','WEEKDAYS']
   * @param {boolean | undefined} options.Enabled Should this alarm be enabled
   * @param {PlayMode | undefined} options.PlayMode What playmode should be used
   * @param {number | undefined} options.Volume The requested alarm volume
   * @returns {Promise<boolean>}
   * @memberof SonosDevice
   */
  public async PatchAlarm(options: PatchAlarm): Promise<boolean> {
    this.debug('AlarmPatch(%o)', options);
    const alarms = await this.ListAndParseAlarms();
    const alarm = alarms.find((a: any) => a.ID === options.ID);
    if (alarm === undefined) {
      throw new Error(`Alarm with ID ${options.ID} not found`);
    }
    if (options.Duration !== undefined) alarm.Duration = options.Duration;
    if (options.Enabled !== undefined) alarm.Enabled = options.Enabled;
    if (options.PlayMode !== undefined) alarm.PlayMode = options.PlayMode;
    if (options.Recurrence !== undefined) alarm.Recurrence = options.Recurrence;
    if (options.StartLocalTime !== undefined) alarm.StartLocalTime = options.StartLocalTime;
    if (options.Volume !== undefined) alarm.Volume = options.Volume;

    return await this.UpdateAlarm(alarm);
  }
}
