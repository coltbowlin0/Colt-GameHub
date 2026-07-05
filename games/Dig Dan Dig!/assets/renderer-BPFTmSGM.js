import{a as e,i as t,n,r,t as i}from"./twgl-V37-fk43.js";Array.prototype.swapRemove=function(e){if(e<0||e>=this.length)return null;let t=this[e],n=this.length-1;return e!==n&&(this[e]=this[n]),this.pop(),t};var a=[{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1},{x:-1,y:-1},{x:1,y:-1},{x:-1,y:1},{x:1,y:1}];function o(e,t,n,r,i=0){return{left:e-i,top:t-i,right:e+n+i,bottom:t+r+i}}function s(e,t,n,r,i){return t+r>=e.left&&t<=e.right&&n+i>=e.top&&n<=e.bottom}function c(e,t,n,r){return t+r>=e.left&&t-r<=e.right&&n+r>=e.top&&n-r<=e.bottom}function l(e,t,n,r){let i=e.x-n.x,a=e.y-n.y,o=t+r;return i*i+a*a<=o*o}function u(e,t,n){let r=n.x-t.x,i=n.y-t.y,a=r*r+i*i;if(a<=1e-4)return 1/0;let o=f(((e.x-t.x)*r+(e.y-t.y)*i)/a,0,1),s=t.x+r*o,c=t.y+i*o,l=e.x-s,u=e.y-c;return l*l+u*u}function d(e,t,n){let r=Math.min(t.x,n.x),i=Math.max(t.x,n.x),a=Math.min(t.y,n.y),o=Math.max(t.y,n.y);return i>=e.left&&r<=e.right&&o>=e.top&&a<=e.bottom}function f(e,t,n){return Math.max(t,Math.min(n,e))}function p(e,t,n,r){return f(Math.min(e-n.left,n.right-e,t-n.top,n.bottom-t)/r,0,1)}function m(e,t,n){return e+(t-e)*n}function h(e,t,n,r){let i=Math.atan2(Math.sin(t-e),Math.cos(t-e)),a=n*r;return e+f(i,-a,a)}function g(e){return e*e}function _(e){let t=1-e;return 1-t*t}function v(e){return e*e*e}function y(e){let t=1-e;return 1-t*t*t}function b(e){return e*e*(3-2*e)}function x(e){return Math.sin(e*Math.PI)}function S(e,t=`Assertion failed`){if(!e)throw Error(t)}function C(){let e=globalThis;return e.nw!=null||e.process?.versions?.nw!=null}function w(e){return e=e^61^e>>>16,e+=e<<3,e^=e>>>4,e=e*668265261>>>0,e^=e>>>15,e>>>0}function T(e){return w(e)/4294967296}function E(e,t,n=`sprite`){return e===`zh-CN`?t:n}function D(e,t,n){return{r:Math.round(e.r+(t.r-e.r)*n),g:Math.round(e.g+(t.g-e.g)*n),b:Math.round(e.b+(t.b-e.b)*n),a:(e.a??1)+((t.a??1)-(e.a??1))*n}}function O(e,t){let n=e.r*.299+e.g*.587+e.b*.114,r=Math.round(f(n+(e.r-n)*t,0,255)),i=Math.round(f(n+(e.g-n)*t,0,255)),a=Math.round(f(n+(e.b-n)*t,0,255));return e.a==null?{r,g:i,b:a}:{r,g:i,b:a,a:e.a}}function k(e,t){let n=Math.round(f(e.r*t,0,255)),r=Math.round(f(e.g*t,0,255)),i=Math.round(f(e.b*t,0,255));return e.a==null?{r:n,g:r,b:i}:{r:n,g:r,b:i,a:e.a}}function A(e,t=1){return{r:parseInt(e.slice(1,3),16),g:parseInt(e.slice(3,5),16),b:parseInt(e.slice(5,7),16),a:t}}var j=A(`#7a8fa8`),M={bg:A(`#101020`),rock:A(`#090c15`),rockMid:A(`#4a4a5a`),rockDark:A(`#2a2a3a`),rockLight:A(`#6a6a7a`),prism:A(`#a5f3fc`),grass:A(`#2f8f3a`),baseExteriorRock:A(`#7a8fa8`),gold:A(`#f4d03f`),goldDark:A(`#b7950b`),diamond:A(`#4fd1ff`),ruby:A(`#e0449b`),essence:A(`#ff6a1f`),energy:A(`#00d4ff`),ammo:A(`#ff9500`),ammoDark:A(`#aa5500`),player:A(`#ffffff`),projectile:A(`#ffffff`),skin:A(`#ffccaa`),drone:A(`#8899aa`),droneDark:A(`#556677`),upgradeSurveyDrone:A(`#64c8ff`),upgradeTeslaCoil:A(`#b464ff`),upgradeSawblade:A(`#dc3c3c`),upgradeCollectorBot:A(`#ff64b4`),rescueHookBodySmall:A(`#464c54`),rescueHookBodyLarge:A(`#737a84`),collectorBot:A(`#ff6699`),beam:A(`#80e5ff`),text:A(`#ffffff`),uiBg:A(`#1a1a2e`),uiBorder:A(`#3a3a5a`),uiBarBg:A(`#2a2a3a`),affordable:A(`#00ff88`),maxed:A(`#4488ff`),unaffordable:A(`#ff4444`),locked:A(`#666666`),connection:A(`#4a4a5a`),danger:A(`#ff3333`),dangerLight:A(`#ff6464`),administratorFace:A(`#ffffff`),administratorWire:A(`#5b86f8`,.9),administratorWireTip:A(`#ffffff`,.8),white:A(`#ffffff`),black:A(`#000000`),spiderBotShadow:A(`#000000`,.35),spiderBotDark:k(O(j,1.72),.39),spiderBotBase:j,spiderBotLight:k(O(j,.57),1.29),spiderBotHeadlight:A(`#ffffff`),outline:A(`#0b0c10`),rockHardBase:A(`#3a3a4a`),rockInvincibleDetail:A(`#1a1a25`),rockHardDetail:A(`#242436`),rockInvincibleBorder:A(`#151520`),rockHardBorder:A(`#20202e`),rubbleLight:A(`#5b564d`),rubbleDark:A(`#38342d`),diamondLight:A(`#a5f3fc`),diamondMid:A(`#7dd3fc`),diamondDeep:A(`#00a8e8`),rubyLight:A(`#ff9fd6`),rubyMid:A(`#e0449b`),rubyDeep:A(`#9a1f61`),essenceLight:A(`#ff9a4a`),essenceMid:A(`#ff6a1f`),essenceDeep:A(`#a8320f`),playerGlow:A(`#78ecff`),backtrackTrail:A(`#000000`,.75),skateTrail:A(`#d7fbff`,.75),weaponGun:A(`#666666`),skinShade:A(`#e0a080`),debugCyanStrong:A(`#00ffff`,.95),debugCyanSoft:A(`#00ffff`,.6),debugMagenta:A(`#ff00ff`,.9),doorWarning:A(`#00ff88`),playerLight:A(`#c8dcff`),escapeSuit:A(`#ffffff`),exteriorDoorLight:A(`#c8dcff`),teslaRed:A(`#ff3333`),teslaGreen:A(`#00ff44`),teslaBlue:A(`#80e5ff`),shadow25:A(`#000000`,.25),girderBase:A(`#1a1f30`),white07:A(`#ffffff`,.07),white03:A(`#ffffff`,.03),white02:A(`#ffffff`,.02),girderBrace:A(`#7aa2ff`,.35),nodeBgCurrent:A(`#0a1a3a`),nodeBgAffordable:A(`#0a2a15`),nodeBgLocked:A(`#2a1515`),warningRed:A(`#ff4444`),hitFlash:A(`#ffffff`),hitFlashRed:A(`#ff0000`),extractButtonBgOn:A(`#4caf50`,.4),extractButtonBgOff:A(`#4caf50`,.25),extractButtonBorder:A(`#4caf50`,.8),diveButtonBgOn:A(`#00ff88`,.4),diveButtonBgOff:A(`#00ff88`,.25),caveDropEnergy:A(`#00d4ff`),caveDropAmmo:A(`#ff9500`),goldChunk50:A(`#f4d03f`),goldChunk10:A(`#fcd34d`),goldChunk1:A(`#fef3c7`),rubyChunk50:A(`#e0449b`),rubyChunk10:A(`#f06ab5`),rubyChunk1:A(`#ffd0e8`),essenceChunk50:A(`#ff6a1f`),essenceChunk10:A(`#ff7d2e`),essenceChunk1:A(`#ff9a4a`)},N={APP_ID:`dig-dan-dig`,APP_VERSION:`0.2.3`,CELL_SIZE:16,PLAYER_RADIUS:3,PLAYER_SPEED:78,PLAYER_ICE_THRUST_PER_SEC:3.2,PLAYER_ICE_GLIDE_DRAG_PER_SEC:.45,PLAYER_ICE_BRAKE_DRAG_PER_SEC:2.8,PLAYER_ICE_TURN_RAD_PER_SEC:Math.PI*2.5,PLAYER_ICE_TURN_BLEED_PER_SEC:.7,PLAYER_ICE_MAX_SPEED_MULT:1.35,PLAYER_ICE_STOP_VELOCITY_THRESHOLD:.4,PLAYER_CONTACT_KNOCKBACK_SPEED:220,PLAYER_KNOCKBACK_STOP_SPEED:.5,PLAYER_KNOCKBACK_FRICTION:6,VEHICLE:{TURN_RESPONSE_PER_SEC:12,MOVING_SPEED_THRESHOLD:4,INTERACT_RADIUS:18,BODY_Y_OFFSET:3,BODY_HALF_LENGTH:11,BODY_HALF_WIDTH:6,WHEEL_OFFSET_SIDE:4,SPAWN_OFFSET_X_CELLS:1.5,SPAWN_OFFSET_Y:1,SPAWN_SEARCH_MAX_RADIUS:72,SPAWN_SEARCH_RADIUS_STEP:4,EXIT_SEARCH_RADIUS:48,EXIT_SEARCH_RADIUS_STEP:3,EXIT_SIDE_PADDING:5,ENTER_JUMP_DURATION:.2,EXIT_JUMP_DURATION:.24,JUMP_HEIGHT_PX:8,HEADLIGHT_RANGE:144,HEADLIGHT_HALF_ANGLE:Math.PI/6},CORNER_CORRECTION_PX:3,SHOT_SPEED:2,PIERCING_DIRECT_HIT_MAX_ANGLE_RAD:Math.PI/18,SHOT_COLLISION_RADIUS:2,SHOT_SIZE:4,MELEE_DAMAGE:1,MELEE_HITBOX_START:10,MELEE_HITBOX_LENGTH:6,MELEE_HITBOX_WIDTH:6,MELEE_SWING_DURATION:.15,MELEE_HIT_RECOIL_STRENGTH:2,GUN_RECOIL_STRENGTH:2,BASE_FIRE_RATE:4,KINETIC_ROUNDS_CELLS:5,TRANSITION_FADE_OUT:.12,TRANSITION_FADE_IN:.12,MODAL_INPUT_LOCK_S:.3,DEATH_FADE_START_DELAY_S:.8,DEATH_FADE_DURATION_S:1.2,DEATH_RETURN_DELAY_S:.8,DEATH_RESOURCE_DROP_MAX_PARTICLES:128,BASE_PROJECTILE_DAMAGE:1,MAX_AMMO:30,ENERGY_MAX:100,ENERGY_IDLE_DRAIN:3,LOW_ENERGY_FOG_START_PCT:.4,LOW_ENERGY_MIN_RADIUS_MULT:.2,LOW_ENERGY_CRITICAL_PCT:.1,FOG_RADIUS_SCREEN_HEIGHT_MULT:.55,FOG_BASE_ALPHA:1,FOG_MAX_ALPHA:1,FOG_BASE_LIGHT_RADIUS:70,NORMAL_MAPPED_SURFACE_TEXTURE_SIZE:64,GROUND_NORMAL_MAPPED_AMBIENT:.2,GROUND_NORMAL_MAPPED_STRENGTH:.15,STATION_LIGHT_RADIUS:28,STATION_LIGHT_INTENSITY:1.05,PROJECTILE_LIGHT_RADIUS:18,PROJECTILE_SCREEN_FADE_MARGIN:40,ENEMY_BOT:{PROJECTILE_SPEED:1.35,PROJECTILE_DAMAGE_FRACTION:.1,LIGHT_RADIUS:24,HIT_KNOCKBACK:10,HIT_KNOCKBACK_SPEED:180,HIT_KNOCKBACK_PAUSE_SECONDS:.12,HEALTH_BASE_ROCK_MULTIPLIER:2.5},PLAYER_DAMAGE_FLASH_DURATION:.28,PLAYER_FIRE_LIGHT_RADIUS:32,PLAYER_FIRE_LIGHT_DURATION:.12,RESCUE_BEACON_SPAWN_MIN_RADIUS:14,RESCUE_BEACON_SPAWN_MAX_RADIUS:56,RESCUE_BEACON_INTERACT_RADIUS:18,RESCUE_BEACON_RETRACT_RADIUS:225,RESCUE_BEACON_GLOW_RADIUS:36,RESCUE_BEACON_DEPLOY_DURATION:.2,RESCUE_BEACON_DESPAWN_DURATION:.2,RESCUE_BEACON_BASE_DESPAWN_DELAY_SECONDS:2,RESCUE_BEACON_REDEPLOY_COOLDOWN_SECONDS:5,RESCUE_BEACON_ENERGY_LOW_FRACTION:.05,RESCUE_BEACON_BASE_EXTRA_RADIUS:200,RESCUE_HOOK:{ROUTE_SAMPLE_SPACING_PX:8,ROUTE_COLLINEAR_DOT:.985,EXTEND_DURATION_SECONDS:.8,RETRACT_SPEED_PX_PER_SECOND:500,RETRACT_EASE_IN_DURATION_SECONDS:1,GRAB_DURATION_SECONDS:.22,BODY_SMALL_RADIUS_PX:2,BODY_LARGE_RADIUS_PX:3,BODY_SAMPLE_SPACING_PX:4,BODY_SMOOTH_SAMPLE_COUNT:3,WAVE_AMPLITUDE_PX:2,WAVE_LENGTH_PX:48,LONG_WAVE_AMPLITUDE_PX:3,LONG_WAVE_LENGTH_PX:157,WAVE_PINCER_FADE_SAMPLES:4,BODY_CULL_SIZE_PX:50,PINCER_SIDE_OFFSET_PX:3,HEAD_LIGHT_RADIUS:90,HEAD_GLOW_RADIUS:18,HEAD_STANDOFF_PX:7,FLEX_SEGMENT_COUNT:5,FLEX_CONSTRAINT_ITERATIONS:6,FLEX_DAMPING_PER_SECOND:6,FLEX_ENDPOINT_BOUNCE:.7,FLEX_ENDPOINT_BOUNCE_MIN_SPEED_PX_PER_SECOND:25,FLEX_ENDPOINT_BOUNCE_MIN_NORMAL_RATIO:.45,FLEX_ENDPOINT_COLLISION_STEP_PX:2,FLEX_ENDPOINT_COLLISION_IMPULSE_PX_PER_SECOND:50,FLEX_ENDPOINT_IMPACT_DAMAGE_MAX_HEALTH_FRACTION:.25,FLEX_ENDPOINT_MAX_BOUNCE_SPEED_PX_PER_SECOND:100,FLEX_ENDPOINT_COLLISION_SCREEN_SHAKE:.22,DESTROY_SLOWDOWN_TIME_SCALE:.05,HIT_SLOWDOWN_TIME_SCALE:.3,DESTROY_SLOWDOWN_COOLDOWN_SECONDS:3,HIT_SLOWDOWN_COOLDOWN_SECONDS:.5,SLOWDOWN_DECAY_PER_SECOND:1.25},SOUND_MIN_PLAYBACK_RATE_SCALE:.4,UPGRADE_SCREEN_MUSIC_SOURCE_BPM:140,UPGRADE_SCREEN_MUSIC_TARGET_BPM:135,UPGRADE_SCREEN_MUSIC_START_PLAYBACK_RATE_MULT:.7,UPGRADE_SCREEN_MUSIC_GAIN:.2,UPGRADE_SCREEN_MUSIC_STARTUP_SECONDS:.5,UPGRADE_SCREEN_MUSIC_SHUTDOWN_SECONDS:.5,UPGRADE_SCREEN_MUSIC_RESUME_LIMIT:.8,PLAYER_GLOW_RADIUS:16,PLAYER_GLOW_ALPHA_BASE:.48,PLAYER_GLOW_ALPHA_PULSE:.13,PLAYER_GLOW_ALPHA_PULSE_FREQ:3,PLAYER_FLASHLIGHT_RANGE:56,PLAYER_FLASHLIGHT_HALF_ANGLE:Math.PI/7,PLAYER_FLASHLIGHT_GLOW_RADIUS:12,PLAYER_FLASHLIGHT_GLOW_ALPHA:.22,PLAYER_FLASHLIGHT_PLAYER_LIGHT_RADIUS:15,DRONE_LIGHT_RADIUS:30,START_CLEARING_RADIUS:2.5,COLLECTOR_RANGE_CELLS:8,ROCK_HEALTH:12,PRECRACK_SEED:7919,PRECRACK_NEAR_SPAWN_RADIUS:7,PRECRACK_NEAR_SPAWN_CHANCE:.6,PRECRACK_GLOBAL_CHANCE:.05,PRECRACK_DAMAGE_MIN_RATIO:.4,PRECRACK_DAMAGE_MAX_RATIO:.75,ROCK_HIT_FLASH_DURATION:1/6,GOLD_PICKUP_RADIUS:20,ATTRACT_ACCEL_BASE:540,ATTRACT_ACCEL_RATE:2160,ORE_MAW_ATTRACT_TIME_SCALE:.3,SIPHON_INTERVAL:4,SIPHON_RANGE_TILES:3,COLLECTOR_BOT_SPEED:3.6,COLLECTOR_BOT_RADIUS:4,COLLECTOR_BOT_SCRAP_MAGNET_RADIUS_CELLS:5,COLLECTOR_BOT_SCRAP_MAGNET_IMPULSE:.75,COLLECTOR_BOT_SCRAP_MAGNET_MAX_SPEED:7,COLLECTOR_BOT_SCRAP_MAGNET_COLLECT_RADIUS:3,CAVE_DENSITY:.008,CAVE_MIN_DISTANCE:12,CAVE_RADIUS_MIN:3,CAVE_RADIUS_MAX:4,CAVE_ACTIVATION_DISTANCE:10,CAVE_ENERGY_DROPS_MIN:1,CAVE_ENERGY_DROPS_MAX:2,CAVE_AMMO_DROPS_MIN:1,CAVE_AMMO_DROPS_MAX:2,CAVE_DROP_AMOUNT_ENERGY:15,CAVE_DROP_AMOUNT_AMMO:12,OUTCROP_ENABLE:!0,OUTCROP_MIN_SPAWN_DIST:5,OUTCROP_NOISE_SCALE:.2,OUTCROP_THRESHOLD:.7,OUTCROP_THRESHOLD_MIN:.4,OUTCROP_THRESHOLD_FALLOFF_DIST:90,OUTCROP_SEED:1337,ICE_PRISM_SPAWN_CHANCE:.012,IMPENETRABLE_GX_MIN:3,IMPENETRABLE_GX_MAX:3,IMPENETRABLE_GY_MIN:3,IMPENETRABLE_GY_MAX:3,IMPENETRABLE_LEFT_INSET_PX:-1,IMPENETRABLE_RIGHT_INSET_PX:-2,IMPENETRABLE_TOP_INSET_PX:0,IMPENETRABLE_BOTTOM_INSET_PX:-6,UPGRADE_STATION_GX:3,UPGRADE_STATION_GY:3,OUTSIDE_STATION_SPAWN_X_OFFSET:0,OUTSIDE_STATION_SPAWN_Y_OFFSET:28,RESCUE_HOOK_SPAWN_X_OFFSET:0,RESCUE_HOOK_SPAWN_Y_OFFSET:20,UPGRADE_STATION_REFILL_RADIUS:48,STATION_SUPPLY_INTERVAL_START:.3,STATION_SUPPLY_INTERVAL_MIN:.05,STATION_SUPPLY_INTERVAL_MULTIPLIER:.8,STATION_SUPPLY_SPAWN_Y_OFFSET:2,STATION_SUPPLY_TARGET_X_OFFSET:7,STATION_SUPPLY_TARGET_Y_OFFSET:12,ROCK_FALL_STAGGER_MAX:.9,ROCK_FALL_DURATION:.18,ROCK_FALL_HEIGHT_PX:10,ROCK_FALL_SCREEN_SHAKE_INTENSITY:.45,ROCK_FALL_SCREEN_SHAKE_DURATION:.6,DEFAULT_WORLD_ZOOM:1,SPECTACLES_WORLD_ZOOM:.6,DEBUG_NOCLIP_MIN_WORLD_ZOOM:.05,DEBUG_NOCLIP_SPEED_MULT:8,ZOOM_STEP:.07,ZOOM_SMOOTHING_PER_SEC:18,HUD_TRANSFER_SPEED:8,UI:{HUD:{BAR_W:60,BAR_H:4,BAR_X:5,BAR_Y:5,BAR_ROW_GAP_Y:10,LABEL_X_GAP:4,LABEL_Energy_Y_OFFSET:-2,LABEL_AM_Y_OFFSET:8,LABEL_TEXT_HEIGHT:8,LABEL_ICON_SIZE:8,RESOURCE_GAIN_LERP_PER_SEC:14,BAR_HALO_DURATION:.45,GOLD_RIGHT_PAD:4,GOLD_TEXT_Y:3,GOLD_ICON_Y:4,GOLD_ICON_GAP_X:4,RESOURCE_LINE_GAP_Y:10,DIAMOND_ICON_GAP_X:3,DIAMOND_TEXT_Y:13,DIAMOND_ICON_Y:13,DEPTH_Y:13,EXTRACT_BUTTON:{W_DESKTOP:130,H:14,Y_FROM_BOTTOM:30,BLINK_SPEED:3,BG_ON:M.extractButtonBgOn,BG_OFF:M.extractButtonBgOff,BORDER:M.extractButtonBorder,TEXT_Y_NUDGE:1},MESSAGE_Y_OFFSET:22,GOLD_TARGET:{X_FROM_RIGHT:40,Y:10},DIAMOND_TARGET:{X_FROM_RIGHT:40,Y:20}},UPGRADE_TREE:{GRID_SIZE:20,CAMERA_SCROLL_PPS:200,NODE_HIT_RADIUS:10,NODE_SIZE:14,FLASH_DURATION:.2,ZOOM_MIN:.1,ZOOM_MAX:1},UPGRADE_SCREEN:{TITLE_Y:6,TITLE_GLOW_DX:1,TITLE_GLOW_DY:1,STATS_Y:10,RESOURCE_ROW_GAP_Y:10,COUNTER_BACKDROP_ALPHA:.7,COUNTER_BACKDROP_PAD_X:3,COUNTER_BACKDROP_PAD_Y:1,RESOURCE_COL_GAP_X:24,DIVE_BUTTON:{PULSE_SPEED:3,BG_ON:M.diveButtonBgOn,BG_OFF:M.diveButtonBgOff,TEXT_Y_NUDGE:0}},UPGRADE_TOOLTIP:{BODY_FONT_MODE:`ttf`,COST_FONT_MODE:`sprite`,SPRITE_LINE_HEIGHT_PX:8,MIN_W:96,MAX_W:168,OFFSET:12,PAD:4,GAP:2,SCREEN_MARGIN:4,COST_GAP_PX:4,COST_SEPARATOR_INSET_Y:2,COST_SEPARATOR_INSET_H:4,COST_FLASH_DURATION:.25,LEVEL_RESOURCE_ICON_GAP_PX:5,LEVEL_RESOURCE_LINE_GAP_PX:3},ADMINISTRATOR_PORTRAIT:{WIDTH:304,BOTTOM_MARGIN:5,PAD:4,PORTRAIT_GAP_X:6,TEXT_GAP_Y:2,ICON_SIZE:8}},PICKUP_TEXT_LIFE:1.8,GOLD_PICKUP_TEXT_RISE_SPEED:.6,FLOAT_TEXT_MERGE_WINDOW:.05,DAMAGE_FLOAT_TEXT_MERGE_WINDOW:.25,BEDROCK_BRASS_INITIAL_GOLD_COST:220,BEDROCK_BRASS_COST_GROWTH:1.2,BEDROCK_BRASS_AMMO_TRANSFER_DURATION:.34,BEDROCK_BRASS_AMMO_TRANSFER_ARC_HEIGHT:12,DRONE_ORBIT_RADIUS:25,DRONE_ORBIT_SPEED:1.5,DRONE_ORBIT_OSCILLATION_AMPLITUDE:6,DRONE_ORBIT_OSCILLATION_SPEED:2.2,DRONE_DEPLOY_INTERVAL_SECONDS:.1,DRONE_DEPLOY_FOLLOW_SPEED:8,DRONE_ORBIT_SETTLE_DISTANCE:8,DRONE_FIRE_INTERVAL:2,DRONE_RANGE:50,DRONE_PROJECTILE_SPEED:2,TESLA_TICK_INTERVAL:2,TESLA_BEAM_FLASH:.4,TESLA_DAMAGE_PER_HIT:1,SAWBLADE_ORBIT_RADIUS:6,SAWBLADE_ORBIT_SPEED:3,SAWBLADE_DAMAGE:2,SAWBLADE_DAMAGE_INTERVAL:.15,SAWBLADE_SIZE:5,POOL_CAPACITIES:{EFFECTS:8192,EFFECTS_ABOVE_FOG:8192,TRAIL_PARTICLES:2048,SURPRISE_STARS:512,ROCK_HIT_LIGHTS:512,PROJECTILE_HIT_CIRCLES:512},TRAIL_RADIUS:3,TRAIL_PARTICLES_PER_FRAME:2,TRAIL_EMIT_SPREAD_PX:2,TRAIL_SHRINK_PX:.4,BACKTRACK_TRAIL:{EMIT_DISTANCE:500,MAX_MARKS:256,FOOTPRINT_SIDE_OFFSET:3,FOOTPRINT_W:3,FOOTPRINT_H:3,SPIDER_FOOTPRINT_SPACING:9,SPIDER_FOOTPRINT_SIDE_OFFSET:10.5,SPIDER_FOOTPRINT_FORE_OFFSET:10.5,SPIDER_FOOTPRINT_W:5,SPIDER_FOOTPRINT_H:5},SKATE_TRAIL:{MAX_SEGMENTS:512,LIFE_SECONDS:4,SAMPLE_SPACING_PX:2.5,WIDTH_PX:1,BLADE_OFFSET_PX:2},SFX_MAX_VOICES:32,LEVEL_TRAVEL_MARKER_MOVE:.8,LEVEL_TRAVEL_SHAKE_INTENSITY:1},P=`player_light`;function F(e,t){let n=Math.ceil(e/N.CELL_SIZE/2)+2,r=Math.ceil(t/N.CELL_SIZE/2)+2;return Math.max(N.CAVE_RADIUS_MAX,n,r)}function I(e){return e.upgrades[P]>0?N.ENERGY_MAX:0}function L(e,t,n){let r={};for(let i of Object.keys(n)){let n=`u_${i}`,a=e.getUniformLocation(t,n);S(a!=null,`Missing WebGL uniform: ${n}`),r[i]=a}return r}function R(e,t,n,r){e.uniform1i(t,n),e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_2D,r)}function z(e){e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}var ee=``+new URL(`atlas-CzbJgn42.png`,import.meta.url).href,B={idle_down:{w:8,h:12},walk_down:{w:8,h:12},idle_up:{w:8,h:12},walk_up:{w:8,h:12},idle_left:{w:8,h:12},walk_left:{w:8,h:12},walk_left_1:{w:8,h:12},walk_left_2:{w:8,h:12},walk_left_3:{w:8,h:12},resource_particle_gold:{w:9,h:9},resource_particle_diamond:{w:9,h:9},resource_particle_ruby:{w:9,h:9},resource_particle_essence:{w:9,h:9},icon_damage:{w:8,h:8},icon_kinetic:{w:8,h:8},icon_piercing:{w:8,h:8},icon_spin:{w:8,h:8},icon_fast:{w:8,h:8},icon_crit:{w:8,h:8},rescue_hook_pincer:{w:8,h:8},icon_distance:{w:8,h:8},icon_bounce:{w:8,h:8},icon_power:{w:8,h:8},icon_radar:{w:8,h:8},skull:{w:8,h:8},surprise_star_top_left:{w:8,h:8},surprise_star_top_right:{w:8,h:8},surprise_star_bottom_left:{w:8,h:8},surprise_star_bottom_right:{w:8,h:8},icon_drill:{w:8,h:8},icon_magnet:{w:8,h:8},icon_collect:{w:8,h:8},icon_long_reach:{w:8,h:8},icon_siphon:{w:8,h:8},icon_pouch:{w:8,h:8},icon_toggle_on:{w:8,h:8},icon_toggle_off:{w:8,h:8},icon_bedrock_brass:{w:8,h:8},icon_gear:{w:8,h:8},icon_fire:{w:8,h:8},icon_eye:{w:8,h:8},icon_tremors:{w:8,h:8},icon_ore_maw:{w:8,h:8},icon_overclock:{w:8,h:8},icon_escape_suit_top_left:{w:8,h:8},icon_escape_suit_bottom_left:{w:8,h:8},drone_base_top_left:{w:8,h:8},drone_base_top_right:{w:8,h:8},drone_base_bottom_left:{w:8,h:8},drone_base_bottom_right:{w:8,h:8},drone_overlay_top_left:{w:8,h:8},drone_overlay_top_right:{w:8,h:8},drone_overlay_bottom_left:{w:8,h:8},drone_overlay_bottom_right:{w:8,h:8},upgrade_station_top_left:{w:8,h:8},upgrade_station_top_right:{w:8,h:8},upgrade_station_upper_left:{w:8,h:8},upgrade_station_screen_top_left:{w:8,h:8},upgrade_station_screen_top_right:{w:8,h:8},upgrade_station_upper_right:{w:8,h:8},upgrade_station_lower_left:{w:8,h:8},upgrade_station_screen_bottom_left:{w:8,h:8},upgrade_station_screen_bottom_right:{w:8,h:8},upgrade_station_lower_right:{w:8,h:8},upgrade_station_bottom_left:{w:8,h:8},upgrade_station_bottom_right:{w:8,h:8},font_pound:{w:8,h:8},font_exclamation:{w:8,h:8},font_quote:{w:8,h:8},font_hash:{w:8,h:8},font_dollar:{w:8,h:8},font_at:{w:8,h:8},font_backtick:{w:8,h:8},font_lbrace:{w:8,h:8},font_pipe:{w:8,h:8},font_rbrace:{w:8,h:8},font_tilde:{w:8,h:8},font_percent:{w:8,h:8},font_ampersand:{w:8,h:8},font_apostrophe:{w:8,h:8},font_lparen:{w:8,h:8},font_rparen:{w:8,h:8},font_asterisk:{w:8,h:8},font_plus:{w:8,h:8},font_comma:{w:8,h:8},font_minus:{w:8,h:8},font_period:{w:8,h:8},font_slash:{w:8,h:8},font_colon:{w:8,h:8},font_semicolon:{w:8,h:8},font_less:{w:8,h:8},font_equals:{w:8,h:8},font_greater:{w:8,h:8},font_question:{w:8,h:8},font_lbracket:{w:8,h:8},font_backslash:{w:8,h:8},font_rbracket:{w:8,h:8},font_caret:{w:8,h:8},font_underscore:{w:8,h:8},font_0:{w:8,h:8},font_1:{w:8,h:8},font_2:{w:8,h:8},font_3:{w:8,h:8},font_4:{w:8,h:8},font_5:{w:8,h:8},font_6:{w:8,h:8},font_7:{w:8,h:8},font_8:{w:8,h:8},font_9:{w:8,h:8},font_A:{w:8,h:8},font_B:{w:8,h:8},font_C:{w:8,h:8},font_D:{w:8,h:8},font_E:{w:8,h:8},font_F:{w:8,h:8},font_G:{w:8,h:8},font_H:{w:8,h:8},font_I:{w:8,h:8},font_J:{w:8,h:8},font_K:{w:8,h:8},font_L:{w:8,h:8},font_M:{w:8,h:8},font_N:{w:8,h:8},font_O:{w:8,h:8},font_P:{w:8,h:8},font_Q:{w:8,h:8},font_R:{w:8,h:8},font_S:{w:8,h:8},font_T:{w:8,h:8},font_U:{w:8,h:8},font_V:{w:8,h:8},font_W:{w:8,h:8},font_X:{w:8,h:8},font_Y:{w:8,h:8},font_Z:{w:8,h:8}},te={idle_down:[0,0,.03125,.2727272727272727],walk_down:[.03125,0,.0625,.2727272727272727],idle_up:[.0625,0,.09375,.2727272727272727],walk_up:[.09375,0,.125,.2727272727272727],idle_left:[.125,0,.15625,.2727272727272727],walk_left:[.15625,0,.1875,.2727272727272727],walk_left_1:[.1875,0,.21875,.2727272727272727],walk_left_2:[.21875,0,.25,.2727272727272727],walk_left_3:[.25,0,.28125,.2727272727272727],resource_particle_gold:[.28125,0,.31640625,.20454545454545456],resource_particle_diamond:[.31640625,0,.3515625,.20454545454545456],resource_particle_ruby:[.3515625,0,.38671875,.20454545454545456],resource_particle_essence:[.38671875,0,.421875,.20454545454545456],icon_damage:[.421875,0,.453125,.18181818181818182],icon_kinetic:[.453125,0,.484375,.18181818181818182],icon_piercing:[.484375,0,.515625,.18181818181818182],icon_spin:[.515625,0,.546875,.18181818181818182],icon_fast:[.546875,0,.578125,.18181818181818182],icon_crit:[.578125,0,.609375,.18181818181818182],rescue_hook_pincer:[.609375,0,.640625,.18181818181818182],icon_distance:[.640625,0,.671875,.18181818181818182],icon_bounce:[.671875,0,.703125,.18181818181818182],icon_power:[.703125,0,.734375,.18181818181818182],icon_radar:[.734375,0,.765625,.18181818181818182],skull:[.765625,0,.796875,.18181818181818182],surprise_star_top_left:[.796875,0,.828125,.18181818181818182],surprise_star_top_right:[.828125,0,.859375,.18181818181818182],surprise_star_bottom_left:[.859375,0,.890625,.18181818181818182],surprise_star_bottom_right:[.890625,0,.921875,.18181818181818182],icon_drill:[.921875,0,.953125,.18181818181818182],icon_magnet:[.953125,0,.984375,.18181818181818182],icon_collect:[0,.2727272727272727,.03125,.45454545454545453],icon_long_reach:[.03125,.2727272727272727,.0625,.45454545454545453],icon_siphon:[.0625,.2727272727272727,.09375,.45454545454545453],icon_pouch:[.09375,.2727272727272727,.125,.45454545454545453],icon_toggle_on:[.125,.2727272727272727,.15625,.45454545454545453],icon_toggle_off:[.15625,.2727272727272727,.1875,.45454545454545453],icon_bedrock_brass:[.1875,.2727272727272727,.21875,.45454545454545453],icon_gear:[.21875,.2727272727272727,.25,.45454545454545453],icon_fire:[.25,.2727272727272727,.28125,.45454545454545453],icon_eye:[.28125,.2727272727272727,.3125,.45454545454545453],icon_tremors:[.3125,.2727272727272727,.34375,.45454545454545453],icon_ore_maw:[.34375,.2727272727272727,.375,.45454545454545453],icon_overclock:[.375,.2727272727272727,.40625,.45454545454545453],icon_escape_suit_top_left:[.40625,.2727272727272727,.4375,.45454545454545453],icon_escape_suit_bottom_left:[.4375,.2727272727272727,.46875,.45454545454545453],drone_base_top_left:[.46875,.2727272727272727,.5,.45454545454545453],drone_base_top_right:[.5,.2727272727272727,.53125,.45454545454545453],drone_base_bottom_left:[.53125,.2727272727272727,.5625,.45454545454545453],drone_base_bottom_right:[.5625,.2727272727272727,.59375,.45454545454545453],drone_overlay_top_left:[.59375,.2727272727272727,.625,.45454545454545453],drone_overlay_top_right:[.625,.2727272727272727,.65625,.45454545454545453],drone_overlay_bottom_left:[.65625,.2727272727272727,.6875,.45454545454545453],drone_overlay_bottom_right:[.6875,.2727272727272727,.71875,.45454545454545453],upgrade_station_top_left:[.71875,.2727272727272727,.75,.45454545454545453],upgrade_station_top_right:[.75,.2727272727272727,.78125,.45454545454545453],upgrade_station_upper_left:[.78125,.2727272727272727,.8125,.45454545454545453],upgrade_station_screen_top_left:[.8125,.2727272727272727,.84375,.45454545454545453],upgrade_station_screen_top_right:[.84375,.2727272727272727,.875,.45454545454545453],upgrade_station_upper_right:[.875,.2727272727272727,.90625,.45454545454545453],upgrade_station_lower_left:[.90625,.2727272727272727,.9375,.45454545454545453],upgrade_station_screen_bottom_left:[.9375,.2727272727272727,.96875,.45454545454545453],upgrade_station_screen_bottom_right:[.96875,.2727272727272727,1,.45454545454545453],upgrade_station_lower_right:[0,.45454545454545453,.03125,.6363636363636364],upgrade_station_bottom_left:[.03125,.45454545454545453,.0625,.6363636363636364],upgrade_station_bottom_right:[.0625,.45454545454545453,.09375,.6363636363636364],font_pound:[.09375,.45454545454545453,.125,.6363636363636364],font_exclamation:[.125,.45454545454545453,.15625,.6363636363636364],font_quote:[.15625,.45454545454545453,.1875,.6363636363636364],font_hash:[.1875,.45454545454545453,.21875,.6363636363636364],font_dollar:[.21875,.45454545454545453,.25,.6363636363636364],font_at:[.25,.45454545454545453,.28125,.6363636363636364],font_backtick:[.28125,.45454545454545453,.3125,.6363636363636364],font_lbrace:[.3125,.45454545454545453,.34375,.6363636363636364],font_pipe:[.34375,.45454545454545453,.375,.6363636363636364],font_rbrace:[.375,.45454545454545453,.40625,.6363636363636364],font_tilde:[.40625,.45454545454545453,.4375,.6363636363636364],font_percent:[.4375,.45454545454545453,.46875,.6363636363636364],font_ampersand:[.46875,.45454545454545453,.5,.6363636363636364],font_apostrophe:[.5,.45454545454545453,.53125,.6363636363636364],font_lparen:[.53125,.45454545454545453,.5625,.6363636363636364],font_rparen:[.5625,.45454545454545453,.59375,.6363636363636364],font_asterisk:[.59375,.45454545454545453,.625,.6363636363636364],font_plus:[.625,.45454545454545453,.65625,.6363636363636364],font_comma:[.65625,.45454545454545453,.6875,.6363636363636364],font_minus:[.6875,.45454545454545453,.71875,.6363636363636364],font_period:[.71875,.45454545454545453,.75,.6363636363636364],font_slash:[.75,.45454545454545453,.78125,.6363636363636364],font_colon:[.78125,.45454545454545453,.8125,.6363636363636364],font_semicolon:[.8125,.45454545454545453,.84375,.6363636363636364],font_less:[.84375,.45454545454545453,.875,.6363636363636364],font_equals:[.875,.45454545454545453,.90625,.6363636363636364],font_greater:[.90625,.45454545454545453,.9375,.6363636363636364],font_question:[.9375,.45454545454545453,.96875,.6363636363636364],font_lbracket:[.96875,.45454545454545453,1,.6363636363636364],font_backslash:[0,.6363636363636364,.03125,.8181818181818182],font_rbracket:[.03125,.6363636363636364,.0625,.8181818181818182],font_caret:[.0625,.6363636363636364,.09375,.8181818181818182],font_underscore:[.09375,.6363636363636364,.125,.8181818181818182],font_0:[.125,.6363636363636364,.15625,.8181818181818182],font_1:[.15625,.6363636363636364,.1875,.8181818181818182],font_2:[.1875,.6363636363636364,.21875,.8181818181818182],font_3:[.21875,.6363636363636364,.25,.8181818181818182],font_4:[.25,.6363636363636364,.28125,.8181818181818182],font_5:[.28125,.6363636363636364,.3125,.8181818181818182],font_6:[.3125,.6363636363636364,.34375,.8181818181818182],font_7:[.34375,.6363636363636364,.375,.8181818181818182],font_8:[.375,.6363636363636364,.40625,.8181818181818182],font_9:[.40625,.6363636363636364,.4375,.8181818181818182],font_A:[.4375,.6363636363636364,.46875,.8181818181818182],font_B:[.46875,.6363636363636364,.5,.8181818181818182],font_C:[.5,.6363636363636364,.53125,.8181818181818182],font_D:[.53125,.6363636363636364,.5625,.8181818181818182],font_E:[.5625,.6363636363636364,.59375,.8181818181818182],font_F:[.59375,.6363636363636364,.625,.8181818181818182],font_G:[.625,.6363636363636364,.65625,.8181818181818182],font_H:[.65625,.6363636363636364,.6875,.8181818181818182],font_I:[.6875,.6363636363636364,.71875,.8181818181818182],font_J:[.71875,.6363636363636364,.75,.8181818181818182],font_K:[.75,.6363636363636364,.78125,.8181818181818182],font_L:[.78125,.6363636363636364,.8125,.8181818181818182],font_M:[.8125,.6363636363636364,.84375,.8181818181818182],font_N:[.84375,.6363636363636364,.875,.8181818181818182],font_O:[.875,.6363636363636364,.90625,.8181818181818182],font_P:[.90625,.6363636363636364,.9375,.8181818181818182],font_Q:[.9375,.6363636363636364,.96875,.8181818181818182],font_R:[.96875,.6363636363636364,1,.8181818181818182],font_S:[0,.8181818181818182,.03125,1],font_T:[.03125,.8181818181818182,.0625,1],font_U:[.0625,.8181818181818182,.09375,1],font_V:[.09375,.8181818181818182,.125,1],font_W:[.125,.8181818181818182,.15625,1],font_X:[.15625,.8181818181818182,.1875,1],font_Y:[.1875,.8181818181818182,.21875,1],font_Z:[.21875,.8181818181818182,.25,1]};function V(e){return te[e]||null}function H(e){return B[e]||null}function ne(e,t,n,r,i){return{angle:i?.angle??0,pivotX:i?.pivotX??e+n*.5,pivotY:i?.pivotY??t+r*.5}}function U(e){return{bg:e.bg??M.black,fg:e.fg??M.white}}var re=class{layer;constructor(e){this.layer=e}drawTileRect(e,t,n,r,i,a=null){let[o,s,c,l]=V(e),u=a?.palette?U(a.palette):null,d=a?.flipH??!1,f=a?.flipV??!1,[p,m]=d?[c,o]:[o,c],[h,g]=f?[l,s]:[s,l],_=ne(t,n,r,i,a);this.layer.sprite(t,n,r,i,p,h,m,g,u,void 0,_.angle,_.pivotX,_.pivotY)}drawTileRectVerticalSlice(e,t,n,r,i,a,o,s=null){let[c,l,u,d]=V(e),p=s?.palette?U(s.palette):null,m=s?.flipH??!1,h=s?.flipV??!1,g=f(a,0,1),_=f(o,0,1);if(_<=g||r<=0||i<=0)return;let v=d-l,y=l+v*g,b=l+v*_,[x,S]=m?[u,c]:[c,u],[C,w]=h?[b,y]:[y,b],T=ne(t,n,r,i,s);this.layer.sprite(t,n,r,i,x,C,S,w,p,void 0,T.angle,T.pivotX,T.pivotY)}drawTile(e,t,n,r=1,i=null){let a=H(e),o=a.w*r,s=a.h*r;this.drawTileRect(e,t,n,o,s,i)}drawTileCentered(e,t,n,r=1,i=null){let a=H(e),o=a.w*r,s=a.h*r;this.drawTileRect(e,Math.round(t-o/2),Math.round(n-s/2),o,s,i)}},ie=class{gameWidth;gameHeight;globalAlpha=1;gl=null;layers;webgl=null;worldViewX=0;worldViewY=0;worldViewWidth;worldViewHeight;worldRenderWidth;worldRenderHeight;frameWorldPrimitives=Ue(12288);frameWorldSprites=We(2048);frameWorldGlows=Ge(64);frameWorldDrawCommands=[];frameWorldDrawCommandCount=0;frameRockPrimitives=Ue(12288);framePostFogWorldPrimitives=Ue(2048);framePostFogWorldSprites=We(512);framePostFogWorldGlows=Ge(64);framePostFogWorldDrawCommands=[];framePostFogWorldDrawCommandCount=0;frameUiPrimitives=Ue(4096);frameUiSprites=We(2048);frameUiGlows=Ge(16);frameUiDrawCommands=[];frameUiDrawCommandCount=0;uiOffsetX=0;uiOffsetY=0;constructor({gameWidth:e,gameHeight:t}){this.gameWidth=e,this.gameHeight=t,this.worldViewWidth=e,this.worldViewHeight=t,this.worldRenderWidth=e,this.worldRenderHeight=t,this.layers={worldBelowFog:this.createWorldLayer(`world`),worldRocks:this.createRockLayer(),worldAboveFog:this.createWorldLayer(`postFogWorld`),ui:this.createScreenLayer()}}resetFrameData(){this.frameWorldPrimitives.count=0,this.frameWorldSprites.count=0,this.frameWorldGlows.count=0,this.frameWorldDrawCommandCount=0,this.frameRockPrimitives.count=0,this.framePostFogWorldPrimitives.count=0,this.framePostFogWorldSprites.count=0,this.framePostFogWorldGlows.count=0,this.framePostFogWorldDrawCommandCount=0,this.frameUiPrimitives.count=0,this.frameUiSprites.count=0,this.frameUiGlows.count=0,this.frameUiDrawCommandCount=0}getWorldScaleX(){return this.worldRenderWidth/this.worldViewWidth}getWorldScaleY(){return this.worldRenderHeight/this.worldViewHeight}transformWorldX(e){return(e-this.worldViewX)*this.getWorldScaleX()}transformWorldY(e){return(e-this.worldViewY)*this.getWorldScaleY()}scaleWorldWidth(e){return e*this.getWorldScaleX()}scaleWorldHeight(e){return e*this.getWorldScaleY()}scaleWorldRadius(e){return e*Math.min(this.getWorldScaleX(),this.getWorldScaleY())}createTileLayerMethods(e){let t=new re(e);return{tileRect:(e,n,r,i,a,o=null)=>{t.drawTileRect(e,n,r,i,a,o)},tileRectVerticalSlice:(e,n,r,i,a,o,s,c=null)=>{t.drawTileRectVerticalSlice(e,n,r,i,a,o,s,c)},tile:(e,n,r,i=1,a=null)=>{t.drawTile(e,n,r,i,a)},tileCentered:(e,n,r,i=1,a=null)=>{t.drawTileCentered(e,n,r,i,a)}}}createWorldLayer(e){let t=e===`world`?this.pushWorldRect.bind(this):this.pushPostFogWorldRect.bind(this),n=e===`world`?this.pushWorldCircle.bind(this):this.pushPostFogWorldCircle.bind(this),r=e===`world`?this.pushWorldSoftGlow.bind(this):this.pushPostFogWorldSoftGlow.bind(this),i=e===`world`?this.pushWorldSprite.bind(this):this.pushPostFogWorldSprite.bind(this),a=(e,n,r,i,a,o,s,c=1,l=0,u=0,d=0)=>{t(this.transformWorldX(e),this.transformWorldY(n),this.scaleWorldWidth(r),this.scaleWorldHeight(i),a,o,s,c,l,this.transformWorldX(u),this.transformWorldY(d))},o=(e,t,r,i,a=1)=>{let o=this.getLayerAlpha(i,a);o!=null&&n(this.transformWorldX(e),this.transformWorldY(t),this.scaleWorldRadius(r),i.r,i.g,i.b,o)},s=(e,t,n,i,a=1)=>{let o=this.getLayerAlpha(i,a);o!=null&&r(this.transformWorldX(e),this.transformWorldY(t),this.scaleWorldRadius(n),i.r,i.g,i.b,o)},c=(e,t,n,r,a,o,s,c,l=null,u=0,d=0,f=e+n*.5,p=t+r*.5)=>{i(this.transformWorldX(e),this.transformWorldY(t),this.scaleWorldWidth(n),this.scaleWorldHeight(r),a,o,s,c,l,u,d,this.transformWorldX(f),this.transformWorldY(p))};return{space:`world`,smoothRect:a,circle:o,softGlow:s,sprite:c,...this.createTileLayerMethods({rect:a,sprite:c}),drawPixelRect:(e,t,n,r,i,o=0,s=1)=>{this.drawPixelRectToLayer(a,e,t,n,r,i,o,s)},pixelRectOutline:(t,n,r,i,a,o=1)=>{this.drawPixelRectOutlineToLayer(e,t,n,r,i,a,o)}}}createRockLayer(){let e=(e,t,n,r,i,a,o,s=1,c=0,l=0,u=0)=>{this.pushRockRect(this.transformWorldX(e),this.transformWorldY(t),this.scaleWorldWidth(n),this.scaleWorldHeight(r),i,a,o,s,c,this.transformWorldX(l),this.transformWorldY(u))};return{space:`world`,smoothRect:e,circle:(e,t,n,r,i=1)=>{let a=this.getLayerAlpha(r,i);a!=null&&this.pushRockCircle(this.transformWorldX(e),this.transformWorldY(t),this.scaleWorldRadius(n),r.r,r.g,r.b,a)},drawPixelRect:(t,n,r,i,a,o=0,s=1)=>{this.drawPixelRectToLayer(e,t,n,r,i,a,o,s)},pixelRectOutline:(e,t,n,r,i,a=1)=>{let o=Math.floor(e),s=Math.floor(t);this.layers.worldRocks.drawPixelRect(o,s,n,1,i,0,a),this.layers.worldRocks.drawPixelRect(o,s+r-1,n,1,i,0,a),this.layers.worldRocks.drawPixelRect(o,s,1,r,i,0,a),this.layers.worldRocks.drawPixelRect(o+n-1,s,1,r,i,0,a)}}}createScreenLayer(){let e=this.pushUiRect.bind(this),t=this.pushUiCircle.bind(this),n=this.pushUiSoftGlow.bind(this),r=(e,n,r,i,a=1)=>{let o=this.getLayerAlpha(i,a);o!=null&&t(e,n,r,i.r,i.g,i.b,o)},i=(e,t,r,i,a=1)=>{let o=this.getLayerAlpha(i,a);o!=null&&n(e,t,r,i.r,i.g,i.b,o)},a=this.pushUiSprite.bind(this);return{space:`screen`,smoothRect:e,circle:r,softGlow:i,sprite:a,...this.createTileLayerMethods({rect:e,sprite:a}),drawPixelRect:(t,n,r,i,a,o=0,s=1)=>{this.drawPixelRectToLayer(e,t,n,r,i,a,o,s)},pixelRectOutline:(e,t,n,r,i,a=1)=>{this.drawPixelRectOutlineToLayer(`ui`,e,t,n,r,i,a)}}}setWorldView(e,t,n=this.gameWidth,r=this.gameHeight,i=n,a=r){this.worldViewX=e,this.worldViewY=t,this.worldViewWidth=n,this.worldViewHeight=r,this.worldRenderWidth=i,this.worldRenderHeight=a}getWorldViewX(){return this.worldViewX}getWorldViewY(){return this.worldViewY}withUiOffset(e,t,n){let r=this.uiOffsetX,i=this.uiOffsetY;this.uiOffsetX=e,this.uiOffsetY=t;try{return n()}finally{this.uiOffsetX=r,this.uiOffsetY=i}}pushWorldRect(e,t,n,r,i,a,o,s=1,c=0,l=0,u=0){this.pushRectCommand(`world`,this.frameWorldPrimitives,e,t,n,r,i,a,o,s,c,l,u)}pushRockRect(e,t,n,r,i,a,o,s=1,c=0,l=0,u=0){qe(this.frameRockPrimitives,e,t,n,r,i,a,o,s,c,l,u)}pushPostFogWorldRect(e,t,n,r,i,a,o,s=1,c=0,l=0,u=0){this.pushRectCommand(`postFogWorld`,this.framePostFogWorldPrimitives,e,t,n,r,i,a,o,s,c,l,u)}pushUiRect(e,t,n,r,i,a,o,s=1,c=0,l=0,u=0){this.pushRectCommand(`ui`,this.frameUiPrimitives,e+this.uiOffsetX,t+this.uiOffsetY,n,r,i,a,o,s,c,l+this.uiOffsetX,u+this.uiOffsetY)}pushWorldCircle(e,t,n,r,i,a,o=1){this.pushCircleCommand(`world`,this.frameWorldPrimitives,e,t,n,r,i,a,o)}pushRockCircle(e,t,n,r,i,a,o=1){Je(this.frameRockPrimitives,e,t,n,r,i,a,o)}pushPostFogWorldCircle(e,t,n,r,i,a,o=1){this.pushCircleCommand(`postFogWorld`,this.framePostFogWorldPrimitives,e,t,n,r,i,a,o)}pushUiCircle(e,t,n,r,i,a,o=1){this.pushCircleCommand(`ui`,this.frameUiPrimitives,e+this.uiOffsetX,t+this.uiOffsetY,n,r,i,a,o)}pushWorldSoftGlow(e,t,n,r,i,a,o=1){this.pushGlowCommand(`world`,this.frameWorldGlows,e,t,n,r,i,a,o)}pushPostFogWorldSoftGlow(e,t,n,r,i,a,o=1){this.pushGlowCommand(`postFogWorld`,this.framePostFogWorldGlows,e,t,n,r,i,a,o)}pushUiSoftGlow(e,t,n,r,i,a,o=1){this.pushGlowCommand(`ui`,this.frameUiGlows,e+this.uiOffsetX,t+this.uiOffsetY,n,r,i,a,o)}pushWorldSprite(e,t,n,r,i,a,o,s,c=null,l=0,u=0,d=e+n*.5,f=t+r*.5){this.pushSpriteCommand(`world`,this.frameWorldSprites,e,t,n,r,i,a,o,s,c,l,u,d,f)}pushPostFogWorldSprite(e,t,n,r,i,a,o,s,c=null,l=0,u=0,d=e+n*.5,f=t+r*.5){this.pushSpriteCommand(`postFogWorld`,this.framePostFogWorldSprites,e,t,n,r,i,a,o,s,c,l,u,d,f)}pushUiSprite(e,t,n,r,i,a,o,s,c=null,l=0,u=0,d=e+n*.5,f=t+r*.5){this.pushSpriteCommand(`ui`,this.frameUiSprites,e+this.uiOffsetX,t+this.uiOffsetY,n,r,i,a,o,s,c,l,u,d+this.uiOffsetX,f+this.uiOffsetY)}appendFrameDrawCommand(e,t,n){if(e===`world`){this.frameWorldDrawCommandCount=Ze(this.frameWorldDrawCommands,this.frameWorldDrawCommandCount,t,n);return}if(e===`postFogWorld`){this.framePostFogWorldDrawCommandCount=Ze(this.framePostFogWorldDrawCommands,this.framePostFogWorldDrawCommandCount,t,n);return}this.frameUiDrawCommandCount=Ze(this.frameUiDrawCommands,this.frameUiDrawCommandCount,t,n)}pushRectCommand(e,t,n,r,i,a,o,s,c,l=1,u=0,d=0,f=0){let p=t.count;qe(t,n,r,i,a,o,s,c,l,u,d,f),t.count>p&&this.appendFrameDrawCommand(e,0,p)}pushCircleCommand(e,t,n,r,i,a,o,s,c=1){let l=t.count;Je(t,n,r,i,a,o,s,c),t.count>l&&this.appendFrameDrawCommand(e,0,l)}pushGlowCommand(e,t,n,r,i,a,o,s,c=1){let l=t.count;Xe(t,n,r,i,a,o,s,c),t.count>l&&this.appendFrameDrawCommand(e,2,l)}pushSpriteCommand(e,t,n,r,i,a,o,s,c,l,u=null,d=0,f=0,p=n+i*.5,m=r+a*.5){let h=t.count;Ye(t,n,r,i,a,o,s,c,l,u,d,f,p,m),t.count>h&&this.appendFrameDrawCommand(e,1,h)}getLayerAlpha(e,t){let n=(e.a??1)*t*this.globalAlpha;return n>0?n:null}drawPixelRectToLayer(e,t,n,r,i,a,o=0,s=1){let c=this.getLayerAlpha(a,s);if(c==null||r<=0||i<=0)return;let l=Math.floor(t),u=Math.floor(n),d=0,f=null,p=null;typeof o==`number`?d=o:(d=o.angle,f=o.pivotX,p=o.pivotY);let m=Math.abs(d)>1e-6,h=m?f??l+r/2:0,g=m?p??u+i/2:0;e(l,u,r,i,a.r,a.g,a.b,c,m?d:0,h,g)}drawPixelRectOutlineToLayer(e,t,n,r,i,a,o=1){let s=e===`world`?this.layers.worldBelowFog:e===`postFogWorld`?this.layers.worldAboveFog:this.layers.ui,c=Math.floor(t),l=Math.floor(n);s.drawPixelRect(c,l,r,1,a,0,o),s.drawPixelRect(c,l+i-1,r,1,a,0,o),s.drawPixelRect(c,l,1,i,a,0,o),s.drawPixelRect(c+r-1,l,1,i,a,0,o)}compositeRockLayer(){this.frameWorldDrawCommandCount=Ze(this.frameWorldDrawCommands,this.frameWorldDrawCommandCount,3,0)}initWebGL(e,t,n){let r=new it(e,t,n,this.gameWidth,this.gameHeight);return this.webgl=r,this.gl=r.gl,r.gl}present(e){S(this.webgl,`WebGL renderer must be initialized before present().`);let t={...e,worldOriginX:this.worldViewX,worldOriginY:this.worldViewY,worldPrimitives:this.frameWorldPrimitives.data,worldSprites:this.frameWorldSprites.data,worldGlows:this.frameWorldGlows.data,worldDrawCommands:this.frameWorldDrawCommands,rockPrimitives:this.frameRockPrimitives.data,postFogWorldPrimitives:this.framePostFogWorldPrimitives.data,postFogWorldSprites:this.framePostFogWorldSprites.data,postFogWorldGlows:this.framePostFogWorldGlows.data,postFogWorldDrawCommands:this.framePostFogWorldDrawCommands,uiPrimitives:this.frameUiPrimitives.data,uiSprites:this.frameUiSprites.data,uiGlows:this.frameUiGlows.data,uiDrawCommands:this.frameUiDrawCommands,worldPrimitiveStride:12,uiPrimitiveStride:12,worldPrimitiveCount:this.frameWorldPrimitives.count,worldSpriteCount:this.frameWorldSprites.count,worldGlowCount:this.frameWorldGlows.count,worldDrawCommandCount:this.frameWorldDrawCommandCount,rockPrimitiveCount:this.frameRockPrimitives.count,postFogWorldPrimitiveCount:this.framePostFogWorldPrimitives.count,postFogWorldSpriteCount:this.framePostFogWorldSprites.count,postFogWorldGlowCount:this.framePostFogWorldGlows.count,postFogWorldDrawCommandCount:this.framePostFogWorldDrawCommandCount,uiPrimitiveCount:this.frameUiPrimitives.count,uiSpriteCount:this.frameUiSprites.count,uiGlowCount:this.frameUiGlows.count,uiDrawCommandCount:this.frameUiDrawCommandCount};this.webgl.present(t)}getLastFrameStats(){return S(this.webgl,`WebGL renderer must be initialized before getLastFrameStats().`),this.webgl.getLastFrameStats()}dispose(){if(this.webgl==null){this.gl=null;return}this.webgl.dispose(),this.webgl=null,this.gl=null}},W=`
attribute vec2 position;
attribute vec2 texcoord;
varying vec2 v_texcoord;

void main() {
    gl_Position = vec4(position, 0.0, 1.0);
    v_texcoord = texcoord;
}
`,ae=`
precision mediump float;

uniform sampler2D u_worldTex;
uniform sampler2D u_uiTex;
uniform sampler2D u_screenOverlayTex;
uniform sampler2D u_bayerTex;
uniform vec2 u_worldSourceSize;
uniform vec2 u_worldTargetSize;
uniform vec2 u_uiSourceSize;
uniform vec2 u_uiTargetSize;
uniform float u_screenOverlayEnabled;
uniform float u_transitionFade;
varying vec2 v_texcoord;

vec4 applyTransitionDither(vec4 color) {
    if (u_transitionFade <= 0.0) return color;

    vec2 pixelPos = floor(v_texcoord * u_uiSourceSize);
    vec2 bayerUV = (mod(pixelPos, 8.0) + vec2(0.5, 0.5)) / 8.0;
    float bayer = texture2D(u_bayerTex, bayerUV).r * 255.0;
    float threshold = (bayer + 0.5) / 64.0;
    float mask = step(threshold, u_transitionFade);

    return vec4(mix(color.rgb, vec3(0.0), mask), color.a);
}

vec4 samplePassTexture(
    sampler2D tex,
    vec2 sourceSize,
    vec2 targetSize
) {
    vec2 activeSize01 = sourceSize / targetSize;
    vec2 uv = vec2(
        v_texcoord.x * activeSize01.x,
        (1.0 - v_texcoord.y) * activeSize01.y
    );
    return texture2D(tex, uv);
}

void main() {
    vec4 worldColor = samplePassTexture(
        u_worldTex,
        u_worldSourceSize,
        u_worldTargetSize
    );
    vec4 overlayColor = samplePassTexture(
        u_screenOverlayTex,
        u_uiSourceSize,
        u_uiTargetSize
    ) * u_screenOverlayEnabled;
    vec4 sceneColor = vec4(
        overlayColor.rgb + worldColor.rgb * (1.0 - overlayColor.a),
        1.0
    );
    vec4 uiColor = samplePassTexture(u_uiTex, u_uiSourceSize, u_uiTargetSize);
    
    vec4 outColor = vec4(
        uiColor.rgb + sceneColor.rgb * (1.0 - uiColor.a),
        1.0
    );

    outColor = applyTransitionDither(outColor);

    gl_FragColor = outColor;
}
`,oe=`
precision mediump float;

uniform sampler2D u_fogLitMaskTex;
uniform vec2 u_worldSourceSize;
uniform vec2 u_fogLitMaskSize;
uniform float u_fogLitMaskEnabled;
uniform vec4 u_fogColor;
varying vec2 v_texcoord;

float sampleFogLitMask(vec2 pixelPos, vec2 maskSize) {
    vec2 uv = vec2(pixelPos.x / maskSize.x, 1.0 - pixelPos.y / maskSize.y);
    return texture2D(u_fogLitMaskTex, uv).r;
}

void main() {
    vec2 pixelPos = v_texcoord * u_worldSourceSize;
    float lit = 0.0;
    if (u_fogLitMaskEnabled > 0.5) {
        lit = sampleFogLitMask(pixelPos, u_fogLitMaskSize);
    }

    if (lit > 0.5) discard;

    gl_FragColor = u_fogColor;
}
`,G=`
precision highp float;
attribute vec2 position;
uniform vec2 u_sourceSize;
uniform vec2 u_center;
uniform float u_lightRadius;
uniform float u_quadRadius;
varying vec2 v_pixelPos;
varying vec2 v_localPos;

void main() {
    vec2 pixelPos = u_center + position * u_quadRadius;
    vec2 zeroToOne = pixelPos / u_sourceSize;
    vec2 clip = zeroToOne * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_pixelPos = pixelPos;
    v_localPos = position * (u_quadRadius / u_lightRadius);
}
`,se=`
precision mediump float;
varying vec2 v_localPos;

void main() {
    if (dot(v_localPos, v_localPos) > 1.0) discard;
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
`,ce=`
uniform sampler2D u_normalTex;
uniform sampler2D u_bayerTex;
uniform vec2 u_worldOrigin;
uniform vec2 u_center;
uniform float u_lightHeightRadiusRatio;
uniform float u_normalTileSize;
uniform float u_normalStrength;
uniform float u_coneEnabled;
uniform vec2 u_coneDir;
uniform float u_coneHalfAngle;
uniform float u_radiusOverflowMult;
varying vec2 v_pixelPos;
varying vec2 v_localPos;

struct NormalLightSample {
    float normalizedDistance;
    float diffuse;
    float radiusShade;
    float dither;
    float coneDot;
};

vec3 readGroundNormal(vec2 worldPos) {
    vec3 normal = texture2D(u_normalTex, worldPos / u_normalTileSize).rgb * 2.0 - 1.0;
    normal.xy *= u_normalStrength;
    normal.y = -normal.y;
    return normalize(normal);
}

NormalLightSample sampleNormalLight() {
    float normalizedDistance = length(v_localPos);

    vec2 toLight = -v_localPos;
    
    
    vec3 lightDir = normalize(vec3(toLight.x, -toLight.y, u_lightHeightRadiusRatio));
    vec3 normal = readGroundNormal(u_worldOrigin + v_pixelPos);

    vec2 fromLight = v_pixelPos - u_center;
    float distanceFromLight = length(fromLight);
    vec2 coneDir = distanceFromLight > 0.001 ? fromLight / distanceFromLight : u_coneDir;

    vec2 bayerUV = (mod(floor(u_worldOrigin + v_pixelPos), 4.0) + vec2(0.5, 0.5)) / 4.0;

    return NormalLightSample(
        normalizedDistance,
        max(dot(normal, lightDir), 0.0),
        1.0 - normalizedDistance,
        
        
        (texture2D(u_bayerTex, bayerUV).r - 0.5) * 0.28,
        dot(coneDir, u_coneDir)
    );
}
`,le=`
precision highp float;
${ce}

void main() {
    NormalLightSample light = sampleNormalLight();
    if (light.normalizedDistance > u_radiusOverflowMult) discard;
    if (u_coneEnabled > 0.5 && light.coneDot < cos(u_coneHalfAngle)) discard;
    if (light.diffuse < 0.6) discard;

    
    bool lit = light.radiusShade > 0.04 + light.dither || light.diffuse >= 0.62;
    if (!lit) discard;

    gl_FragColor = vec4(1.0);
}
`,ue=`
const float BRIGHT_SHADE = 0.76;
const float SHADE_SATURATION = 7.8;

vec3 saturateLightTintForShade(vec3 lightColor, float shade) {
    vec3 tint = mix(vec3(1.0), lightColor, 0.65);
    if (shade >= BRIGHT_SHADE) return tint;

    float gray = dot(tint, vec3(0.299, 0.587, 0.114));
    return clamp(mix(vec3(gray), tint, SHADE_SATURATION), 0.0, 1.0);
}
`,de=`
precision highp float;
uniform sampler2D u_bayerTex;
uniform vec3 u_lightColor;
uniform float u_intensity;
uniform float u_coneEnabled;
uniform vec2 u_coneDir;
uniform float u_coneHalfAngle;
uniform float u_radiusOverflowMult;
varying vec2 v_pixelPos;
varying vec2 v_localPos;

void main() {
    float normalizedDistance = length(v_localPos);
    if (normalizedDistance > u_radiusOverflowMult) discard;

    if (u_coneEnabled > 0.5) {
        vec2 coneDir = normalizedDistance > 0.001 ? normalize(v_localPos) : u_coneDir;
        if (dot(coneDir, u_coneDir) < cos(u_coneHalfAngle)) discard;
    }

    vec2 bayerUV = (mod(floor(v_pixelPos), 4.0) + vec2(0.5, 0.5)) / 4.0;
    float dither = (texture2D(u_bayerTex, bayerUV).r - 0.5) * 0.12;
    float strength = clamp((1.0 - normalizedDistance) * 1.35 + dither, 0.0, 1.0);
    strength = clamp(strength * u_intensity, 0.0, 1.0);
    if (strength <= 0.01) discard;

    vec3 lightTint = mix(vec3(1.0), u_lightColor, 0.65);
    gl_FragColor = vec4(lightTint * strength, 1.0);
}
`,fe=`
precision highp float;
uniform sampler2D u_rockTex;
uniform sampler2D u_rockLightMaskTex;
uniform vec2 u_worldSourceSize;
uniform vec2 u_rockTargetSize;
uniform vec2 u_worldOrigin;
uniform vec2 u_iceEffectCenter;
uniform sampler2D u_biomeMaskTex;
uniform float u_biomeMaskEnabled;
uniform vec2 u_biomeMaskOrigin;
uniform vec2 u_biomeMaskSize;
uniform float u_biomeMaskCellSize;
uniform float u_lightMaskEnabled;
uniform float u_time;
uniform sampler2D u_bayerTex;
varying vec2 v_texcoord;

vec4 sampleLayer(sampler2D tex, vec2 pixelPos) {
    
    
    
    vec2 uv = vec2(
        pixelPos.x / u_rockTargetSize.x,
        (u_worldSourceSize.y - pixelPos.y) / u_rockTargetSize.y
    );
    return texture2D(tex, uv);
}

float readRockBiomeMaskCell(vec2 cell) {
    vec2 maskCoord = clamp(cell - u_biomeMaskOrigin, vec2(0.0), u_biomeMaskSize - vec2(1.0));
    vec2 uv = (maskCoord + vec2(0.5)) / u_biomeMaskSize;
    return floor(texture2D(u_biomeMaskTex, uv).r * 255.0 + 0.5);
}

float getRockBiomeId(vec2 worldPos) {
    if (u_biomeMaskEnabled < 0.5) return 0.0;
    return readRockBiomeMaskCell(floor(worldPos / u_biomeMaskCellSize));
}

float isCooledMagmaBiome(float biomeId) {
    
    return step(254.5, biomeId) * step(biomeId, 255.5);
}

float isActiveMagmaBiome(float biomeId) {
    
    return step(253.5, biomeId) * step(biomeId, 254.5);
}

float getCooledMagmaOuterEdgeFade(vec2 cell, vec2 neighborOffset, float edgeDist, float edgePx) {
    float neighbor = isCooledMagmaBiome(readRockBiomeMaskCell(cell + neighborOffset));
    
    
    return mix(smoothstep(0.0, edgePx, edgeDist), 1.0, neighbor);
}

float getRockCooledMagmaAmount(vec2 worldPos) {
    if (u_biomeMaskEnabled < 0.5) return 0.0;

    vec2 cellPos = worldPos / u_biomeMaskCellSize;
    vec2 cell = floor(cellPos);
    vec2 localPx = fract(cellPos) * u_biomeMaskCellSize;
    float amount = isCooledMagmaBiome(readRockBiomeMaskCell(cell));
    if (amount <= 0.0) return 0.0;

    
    
    
    float edgePx = 5.0;
    if (localPx.y <= edgePx) {
        amount *= getCooledMagmaOuterEdgeFade(cell, vec2(0.0, -1.0), localPx.y, edgePx);
    }
    if (localPx.y >= u_biomeMaskCellSize - edgePx) {
        amount *= getCooledMagmaOuterEdgeFade(cell, vec2(0.0, 1.0), u_biomeMaskCellSize - localPx.y, edgePx);
    }
    if (localPx.x <= edgePx) {
        amount *= getCooledMagmaOuterEdgeFade(cell, vec2(-1.0, 0.0), localPx.x, edgePx);
    }
    if (localPx.x >= u_biomeMaskCellSize - edgePx) {
        amount *= getCooledMagmaOuterEdgeFade(cell, vec2(1.0, 0.0), u_biomeMaskCellSize - localPx.x, edgePx);
    }
    return amount;
}

float iceRockHash(vec2 p) {
    return fract(sin(dot(p, vec2(127.13, 311.71))) * 43758.5453);
}

vec2 iceRockHash2(vec2 p) {
    return vec2(
        iceRockHash(p + vec2(17.0, 53.0)),
        iceRockHash(p + vec2(91.0, 29.0))
    );
}

float getActiveMagmaEdgeInset(float edgeCoord, float salt) {
    float wave =
        sin(edgeCoord * 0.55 + u_time * 3.0 + salt) * 0.5 +
        sin(edgeCoord * 1.15 - u_time * 2.1 + salt * 1.7) * 0.3 +
        sin(edgeCoord * 0.28 + u_time * 1.2 + salt * 2.3) * 0.2;
    return 2.0 + (wave * 0.5 + 0.5) * 3.0;
}

float getActiveMagmaExposedEdgeInset(float activeNeighbor, float edgeCoord, float salt) {
    return mix(
        getActiveMagmaEdgeInset(edgeCoord, salt),
        -1.0,
        step(0.5, activeNeighbor)
    );
}

float max4(vec4 v) {
    return max(max(v.x, v.y), max(v.z, v.w));
}

float getReflection(vec2 worldPos, vec2 cameraOrigin, float iceAmount) {
    
    
    vec2 p = worldPos / 22.0;
    vec2 cell = floor(p);
    vec2 local = fract(p);
    float nearest = 100.0;
    float cellShade = 0.0;
    vec2 selectedCell = vec2(0.0);

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 offset = vec2(float(x), float(y));
            vec2 neighbor = cell + offset;
            vec2 pointHash = iceRockHash2(neighbor);
            vec2 point = offset + pointHash;
            float dist = length(point - local);
            if (dist < nearest) {
                nearest = dist;
                cellShade = iceRockHash(neighbor + vec2(41.0, 73.0));
                selectedCell = neighbor;
            }
        }
    }

    
    
    vec2 viewDir = normalize(iceRockHash2(selectedCell + vec2(101.0, 149.0)) * 2.0 - 1.0);
    float viewRate = 0.025 + iceRockHash(selectedCell + vec2(173.0, 211.0)) * 0.055;
    float viewShift = 0.5 + 0.5 * sin(dot(cameraOrigin, viewDir) * viewRate + cellShade * 6.2831853);
    float viewOpacity = mix(0.18, 0.82, smoothstep(0.08, 0.92, viewShift));
    
    float playerBoost = 1.0 + smoothstep(110.0, 0.0, distance(worldPos, u_iceEffectCenter)) * 2.5;
    float facet = mix(0.15, 0.85, cellShade) * viewOpacity;
    return iceAmount * facet * playerBoost;
}

void main() {
    vec2 pixelPos = v_texcoord * u_worldSourceSize;
    vec2 worldPos = u_worldOrigin + pixelPos;
    vec4 rock = sampleLayer(u_rockTex, pixelPos);
    if (rock.a <= 0.001) discard;

    vec3 lightMask = u_lightMaskEnabled > 0.5
        ? sampleLayer(u_rockLightMaskTex, pixelPos).rgb
        : vec3(0.0);
    float lit = clamp(max(max(lightMask.r, lightMask.g), lightMask.b), 0.0, 1.0);
    vec3 lightTint = lit > 0.001 ? lightMask / lit : vec3(1.0);
    float brightness = mix(0.5, 1.12, lit);
    vec3 color = rock.rgb * brightness * lightTint;
    float biomeId = getRockBiomeId(worldPos);
    float iceBiome = step(0.5, biomeId) * step(biomeId, 1.5);
    float reflection = getReflection(worldPos, u_worldOrigin, iceBiome);
    color += vec3(0.48, 0.82, 0.95) * reflection * mix(0.04, 0.18, lit);
    float cooledMagmaAmount = getRockCooledMagmaAmount(worldPos);
    float magmaReflection = getReflection(worldPos, u_worldOrigin, cooledMagmaAmount);
    color += vec3(1.0, 0.42, 0.06) * magmaReflection * mix(0.05, 0.16, lit);

    float activeMagmaBiome = isActiveMagmaBiome(biomeId);
    if (activeMagmaBiome > 0.5) {
        vec2 cellPos = worldPos / u_biomeMaskCellSize;
        vec2 cell = floor(cellPos);
        vec2 localPx = fract(cellPos) * u_biomeMaskCellSize;
        float topNeighbor = isActiveMagmaBiome(readRockBiomeMaskCell(cell + vec2(0.0, -1.0)));
        float bottomNeighbor = isActiveMagmaBiome(readRockBiomeMaskCell(cell + vec2(0.0, 1.0)));
        float leftNeighbor = isActiveMagmaBiome(readRockBiomeMaskCell(cell + vec2(-1.0, 0.0)));
        float rightNeighbor = isActiveMagmaBiome(readRockBiomeMaskCell(cell + vec2(1.0, 0.0)));

        
        vec4 edgeInset = vec4(
            getActiveMagmaExposedEdgeInset(topNeighbor, worldPos.x, 0.0),
            getActiveMagmaExposedEdgeInset(bottomNeighbor, worldPos.x, 13.0),
            getActiveMagmaExposedEdgeInset(leftNeighbor, worldPos.y, 29.0),
            getActiveMagmaExposedEdgeInset(rightNeighbor, worldPos.y, 47.0)
        );
        vec4 edgeDistance = vec4(
            localPx.y,
            u_biomeMaskCellSize - localPx.y,
            localPx.x,
            u_biomeMaskCellSize - localPx.x
        );
        vec4 exposedEdge = step(vec4(0.0), edgeInset);

        
        
        
        float edgeDiscardAmount = max4(exposedEdge * (1.0 - step(edgeInset, edgeDistance)));
        if (edgeDiscardAmount > 0.5) discard;

        float edgeAmount = max4(
            exposedEdge * (1.0 - smoothstep(edgeInset, edgeInset + vec4(3.0), edgeDistance))
        );

        vec2 boilP = worldPos / 12.0;
        float boil =
            sin(boilP.x * 0.7 + u_time * 2.0) * sin(boilP.y * 0.9 + u_time * 2.3) * 0.7 +
            sin(boilP.x * 1.4 + boilP.y * 0.6 + u_time * 1.5) * 0.5 +
            sin(boilP.y * 1.8 - boilP.x * 0.3 + u_time * 3.0) * 0.35 +
            sin(boilP.x * 3.1 + boilP.y * 2.7 + u_time * 4.0) * 0.2;
        float flicker = boil * 0.5 + 0.5;

        
        
        vec2 bayerUV = (mod(floor(worldPos), 4.0) + vec2(0.5, 0.5)) / 4.0;
        float bayer = texture2D(u_bayerTex, bayerUV).r;
        float threshold = (bayer - 0.5) * 1.1 + 0.5;
        float bodyGlow = step(threshold, flicker);
        float edgeGlow = step(threshold, edgeAmount);
        color = mix(color, vec3(1.0, 0.48, 0.03), bodyGlow * 0.55);
        color = mix(color, vec3(1.0, 0.58, 0.06), edgeGlow * edgeAmount * 0.8);
    }

    gl_FragColor = vec4(color, rock.a);
}
`,pe=`
attribute vec2 position;
attribute vec4 color;
uniform vec2 u_sourceSize;
varying vec4 v_color;
varying vec2 v_pixelPos;

void main() {
    vec2 zeroToOne = position / u_sourceSize;
    vec2 clip = zeroToOne * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_color = color;
    v_pixelPos = position;
}
`,me=`
precision mediump float;
varying vec4 v_color;

void main() {
    gl_FragColor = v_color;
}
`,he=`
attribute vec2 position;

attribute vec2 localPos;

attribute vec2 center;
attribute vec4 color;
uniform vec2 u_sourceSize;
varying vec2 v_pixelPos;
varying vec2 v_localPos;
varying vec2 v_center;
varying vec4 v_color;

void main() {
    vec2 zeroToOne = position / u_sourceSize;
    vec2 clip = zeroToOne * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_pixelPos = position;
    v_localPos = localPos;
    v_center = center;
    v_color = color;
}
`,ge=`
precision mediump float;
uniform sampler2D u_bayerTex;
varying vec2 v_pixelPos;
varying vec2 v_localPos;
varying vec2 v_center;
varying vec4 v_color;

void main() {
    float dist = length(v_localPos);
    if (dist > 1.0) discard;

    
    
    vec2 patternPos = mod(mod(floor(v_pixelPos) - floor(v_center), 4.0) + 4.0, 4.0);
    vec2 bayerUV = (patternPos + vec2(0.5, 0.5)) / 4.0;
    
    
    float threshold = (texture2D(u_bayerTex, bayerUV).r * 255.0 / 16.0 + 0.5) / 16.0;
    
    
    float coverage = clamp((1.0 - dist) * 1.6, 0.0, 1.0);
    if (coverage <= threshold) discard;

    
    
    float tone = 0.35;
    if (coverage > 0.66) {
        tone = 1.0;
    } else if (coverage > 0.33) {
        tone = 0.65;
    }

    gl_FragColor = vec4(v_color.rgb, v_color.a * tone);
}
`,_e=`
attribute vec2 position;
attribute vec2 texcoord;
attribute float paletteMix;
attribute vec4 bgColor;
attribute vec4 fgColor;
uniform vec2 u_sourceSize;
varying vec2 v_texcoord;
varying vec2 v_pixelPos;
varying float v_paletteMix;
varying vec4 v_bgColor;
varying vec4 v_fgColor;

void main() {
    vec2 zeroToOne = position / u_sourceSize;
    vec2 clip = zeroToOne * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_texcoord = texcoord;
    v_pixelPos = position;
    v_paletteMix = paletteMix;
    v_bgColor = bgColor;
    v_fgColor = fgColor;
}
`,ve=`
precision mediump float;
uniform sampler2D u_tex;
varying vec2 v_texcoord;
varying float v_paletteMix;
varying vec4 v_bgColor;
varying vec4 v_fgColor;

void main() {
    vec4 sampled = texture2D(u_tex, v_texcoord);
    vec4 outColor = sampled;

    if (v_paletteMix > 0.5) {
        float luminance = dot(sampled.rgb, vec3(0.3333333, 0.3333333, 0.3333333));
        outColor = mix(v_bgColor, v_fgColor, luminance);
        outColor.a *= sampled.a;
    }

    gl_FragColor = outColor;
}
`,ye=`
uniform sampler2D u_biomeMaskTex;
uniform float u_biomeMaskEnabled;
uniform vec2 u_biomeMaskOrigin;
uniform vec2 u_biomeMaskSize;
uniform float u_biomeMaskCellSize;
uniform vec3 u_biomeColor0;
uniform vec3 u_biomeColor1;
uniform vec3 u_biomeColor2;
uniform vec3 u_biomeColor3;

float readBiomeMaskCell(vec2 cell) {
    vec2 maskCoord = clamp(cell - u_biomeMaskOrigin, vec2(0.0), u_biomeMaskSize - vec2(1.0));
    vec2 uv = (maskCoord + vec2(0.5)) / u_biomeMaskSize;
    return floor(texture2D(u_biomeMaskTex, uv).r * 255.0 + 0.5);
}

float hashNoise(vec2 worldPos) {
    vec2 p = floor(worldPos);
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

vec3 getBiomeColor(float id, vec3 fallbackColor) {
    if (id < 0.5) return u_biomeColor0;
    if (id < 1.5) return u_biomeColor1;
    if (id < 2.5) return u_biomeColor2;
    if (id < 3.5) return u_biomeColor3;
    return fallbackColor;
}

float getDifferentNeighborEdgeAmount(float current, float neighbor, float distanceIntoCell) {
    if (current < neighbor + 0.5) return 0.0;
    return 1.0 - smoothstep(0.0, 0.5, distanceIntoCell);
}

float getBiomeSurfaceId(vec2 worldPos) {
    if (u_biomeMaskEnabled < 0.5) return 0.0;

    vec2 cellPos = worldPos / u_biomeMaskCellSize;
    vec2 cell = floor(cellPos);
    vec2 local = fract(cellPos);
    float current = readBiomeMaskCell(cell);
    float selected = current;
    float amount = 0.0;

    
    
    float left = readBiomeMaskCell(cell + vec2(-1.0, 0.0));
    float leftAmount = getDifferentNeighborEdgeAmount(current, left, local.x);
    if (leftAmount > amount) {
        amount = leftAmount;
        selected = left;
    }

    float right = readBiomeMaskCell(cell + vec2(1.0, 0.0));
    float rightAmount = getDifferentNeighborEdgeAmount(current, right, 1.0 - local.x);
    if (rightAmount > amount) {
        amount = rightAmount;
        selected = right;
    }

    float top = readBiomeMaskCell(cell + vec2(0.0, -1.0));
    float topAmount = getDifferentNeighborEdgeAmount(current, top, local.y);
    if (topAmount > amount) {
        amount = topAmount;
        selected = top;
    }

    float bottom = readBiomeMaskCell(cell + vec2(0.0, 1.0));
    float bottomAmount = getDifferentNeighborEdgeAmount(current, bottom, 1.0 - local.y);
    if (bottomAmount > amount) {
        amount = bottomAmount;
        selected = bottom;
    }

    if (amount <= 0.0 || hashNoise(worldPos) >= amount) selected = current;
    return selected;
}

float iceGroundHash(vec2 p) {
    return fract(sin(dot(p, vec2(311.75, 127.13))) * 43758.5453);
}

vec2 iceGroundHash2(vec2 p) {
    return vec2(
        iceGroundHash(p + vec2(23.0, 61.0)),
        iceGroundHash(p + vec2(97.0, 37.0))
    );
}

float getGroundIceReflection(vec2 worldPos, vec2 cameraOrigin, float biomeId) {
    float ice = step(0.5, biomeId) * step(biomeId, 1.5);
    
    
    vec2 p = worldPos / 24.0;
    vec2 cell = floor(p);
    vec2 local = fract(p);
    float nearest = 100.0;
    float cellShade = 0.0;
    vec2 selectedCell = vec2(0.0);

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 offset = vec2(float(x), float(y));
            vec2 neighbor = cell + offset;
            vec2 pointHash = iceGroundHash2(neighbor);
            vec2 point = offset + pointHash;
            float dist = length(point - local);
            if (dist < nearest) {
                nearest = dist;
                cellShade = iceGroundHash(neighbor + vec2(43.0, 79.0));
                selectedCell = neighbor;
            }
        }
    }

    
    
    vec2 viewDir = normalize(iceGroundHash2(selectedCell + vec2(107.0, 151.0)) * 2.0 - 1.0);
    float viewRate = 0.022 + iceGroundHash(selectedCell + vec2(179.0, 223.0)) * 0.05;
    float viewShift = 0.5 + 0.5 * sin(dot(cameraOrigin, viewDir) * viewRate + cellShade * 6.2831853);
    float viewOpacity = mix(0.18, 0.78, smoothstep(0.08, 0.92, viewShift));
    
    float playerBoost = 1.0 + smoothstep(110.0, 0.0, distance(worldPos, u_iceEffectCenter)) * 2.5;
    float facet = mix(0.12, 0.82, cellShade) * viewOpacity;
    return ice * facet * playerBoost;
}
`,be=`
precision highp float;
uniform vec4 u_baseColor;
uniform vec3 u_ambientColor;
uniform float u_ambient;
uniform sampler2D u_diffuseTex;
uniform vec2 u_worldOrigin;
uniform vec2 u_sourceSize;
uniform float u_normalTileSize;
uniform vec2 u_iceEffectCenter;
${ye}

void main() {
    
    
    vec2 pixelPos = vec2(gl_FragCoord.x, u_sourceSize.y - gl_FragCoord.y);
    vec2 worldPos = u_worldOrigin + pixelPos;
    float detail = texture2D(u_diffuseTex, worldPos / u_normalTileSize).r;
    float biomeId = getBiomeSurfaceId(worldPos);
    vec3 baseColor = getBiomeColor(biomeId, u_baseColor.rgb);
    float reflection = getGroundIceReflection(worldPos, u_worldOrigin, biomeId);
    vec3 surfaceColor = baseColor * mix(0.7, 7.2, detail);
    surfaceColor += vec3(0.42, 0.76, 0.92) * reflection * 0.07;
    gl_FragColor = vec4(surfaceColor * u_ambientColor * u_ambient, u_baseColor.a);
}
`,xe=.15,Se=12,Ce=.75,K=1.35,we=`
precision highp float;

uniform sampler2D u_diffuseTex;
uniform vec3 u_surfaceColor;
uniform vec3 u_lightColor;
uniform float u_intensity;
uniform vec2 u_iceEffectCenter;
${ue}
${ce}
${ye}

void main() {
    vec2 worldPos = u_worldOrigin + v_pixelPos;

    NormalLightSample light = sampleNormalLight();
    if (light.normalizedDistance > u_radiusOverflowMult) discard;

    if (u_coneEnabled > 0.5 && light.coneDot < cos(u_coneHalfAngle)) discard;

    
    
    float diffuse = light.diffuse + light.dither * 0.6;
    float shade = 0.0;
    if (diffuse >= 0.6) shade = 0.48;
    if (diffuse >= 0.72) shade = BRIGHT_SHADE;
    if (light.radiusShade <= -0.18 + light.dither) discard;
    if (shade <= 0.0) discard;

    float detail = texture2D(u_diffuseTex, worldPos / u_normalTileSize).r;
    float biomeId = getBiomeSurfaceId(worldPos);
    vec3 baseColor = getBiomeColor(biomeId, u_surfaceColor);
    float reflection = getGroundIceReflection(worldPos, u_worldOrigin, biomeId);
    vec3 surfaceColor = baseColor * mix(0.7, 7.2, detail);
    surfaceColor += vec3(0.50, 0.84, 0.96) * reflection * light.diffuse * 0.16;
    vec3 lightTint = saturateLightTintForShade(u_lightColor, shade);
    float alpha = clamp(u_intensity * shade, 0.0, 1.0);
    gl_FragColor = vec4(surfaceColor * lightTint * alpha, alpha);
}
`,Te=12,Ee=24,q=20,De=q*6,Oe=q*12,ke=(()=>{let e=new Float32Array(42);for(let t=0;t<=q;t++){let n=t/q*Math.PI*2,r=t*2;e[r+0]=Math.cos(n),e[r+1]=Math.sin(n)}return e})(),J=7,Ae=12,je=12,Me=12,Ne=12,Pe=12,Fe=24,Ie=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),Le=24,Re=6,ze=0,Be=1,Ve={r:0,g:0,b:0,a:0},He={r:255,g:255,b:255,a:1};function Ue(e=4096){return{data:new Float32Array(e*12),count:0}}function We(e=1024){return{data:new Float32Array(e*21),count:0}}function Ge(e=64){return{data:new Float32Array(e*J),count:0}}function Ke(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=e.count+1;if(p*12>e.data.length){let t=e.data.length;for(;p*12>t;)t*=2;let n=new Float32Array(t);n.set(e.data),e.data=n}let m=e.count*12,h=e.data;h[m+0]=t,h[m+1]=n,h[m+2]=r,h[m+3]=i,h[m+4]=a/255,h[m+5]=o/255,h[m+6]=s/255,h[m+7]=c,h[m+8]=l,h[m+9]=u,h[m+10]=d,h[m+11]=f,e.count=p}function qe(e,t,n,r,i,a,o,s,c=1,l=0,u=0,d=0){c<=0||r<=0||i<=0||Ke(e,t,n,r,i,a,o,s,c,l,u,d,ze)}function Je(e,t,n,r,i,a,o,s=1){s<=0||r<=0||Ke(e,t,n,r,0,i,a,o,s,0,0,0,Be)}function Ye(e,t,n,r,i,a,o,s,c,l=null,u=0,d=0,f=t+r*.5,p=n+i*.5){if(r<=0||i<=0)return;let m=e.count+1;if(m*21>e.data.length){let t=e.data.length;for(;m*21>t;)t*=2;let n=new Float32Array(t);n.set(e.data),e.data=n}let h=+!!l,g=l?l.bg:Ve,_=l?l.fg:He,v=e.count*21,y=e.data;y[v+0]=t,y[v+1]=n,y[v+2]=r,y[v+3]=i,y[v+4]=a,y[v+5]=o,y[v+6]=s,y[v+7]=c,y[v+8]=h,y[v+9]=g.r/255,y[v+10]=g.g/255,y[v+11]=g.b/255,y[v+12]=g.a??1,y[v+13]=_.r/255,y[v+14]=_.g/255,y[v+15]=_.b/255,y[v+16]=_.a??1,y[v+17]=u,y[v+18]=d,y[v+19]=f,y[v+20]=p,e.count=m}function Xe(e,t,n,r,i,a,o,s=1){if(s<=0||r<=0)return;let c=e.count+1;if(c*J>e.data.length){let t=e.data.length;for(;c*J>t;)t*=2;let n=new Float32Array(t);n.set(e.data),e.data=n}let l=e.count*J,u=e.data;u[l+0]=t,u[l+1]=n,u[l+2]=r,u[l+3]=i/255,u[l+4]=a/255,u[l+5]=o/255,u[l+6]=s,e.count=c}function Ze(e,t,n,r){if(t>0){let i=e[t-1];if(i.type===n&&i.start+i.count===r)return i.count+=1,t}if(t>=e.length)e.push({type:n,start:r,count:1});else{let i=e[t];i.type=n,i.start=r,i.count=1}return t+1}function Qe(e,t,n){let r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),z(e),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),r}function $e(e,t,n,r){let i=e.createTexture();return S(i,`Failed to create luminance texture.`),e.bindTexture(e.TEXTURE_2D,i),z(e),e.texImage2D(e.TEXTURE_2D,0,e.LUMINANCE,t,n,0,e.LUMINANCE,e.UNSIGNED_BYTE,r),i}function et(e){return $e(e,8,8,new Uint8Array([0,48,12,60,3,51,15,63,32,16,44,28,35,19,47,31,8,56,4,52,11,59,7,55,40,24,36,20,43,27,39,23,2,50,14,62,1,49,13,61,34,18,46,30,33,17,45,29,10,58,6,54,9,57,5,53,42,26,38,22,41,25,37,21]))}function tt(e){return $e(e,4,4,new Uint8Array([0,128,32,160,192,64,224,96,48,176,16,144,240,112,208,80]))}function Y(e,t,n){let r=Qe(e,t,n),i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER);if(a!==e.FRAMEBUFFER_COMPLETE)throw Error(`Failed to create framebuffer (status: ${a}).`);return e.bindFramebuffer(e.FRAMEBUFFER,null),{framebuffer:i,texture:r}}function X(e,t){t.texture!=null&&(e.deleteTexture(t.texture),t.texture=null),t.framebuffer!=null&&(e.deleteFramebuffer(t.framebuffer),t.framebuffer=null)}function Z(e,t,r){let i=n(e,t);return S(i!=null,`Failed to compile ${r} program.`),i}function Q(e,t){e.deleteProgram(t.program)}function $(e,t){let n=Object.values(t.attribs);for(let t of n)t.buffer!=null&&e.deleteBuffer(t.buffer)}function nt(e){return e.shape===`cone`?e.range:e.radius}function rt(e){return Math.max(Ce,Se/e)}var it=class{gl;maxWorldWidth;maxWorldHeight;maxTextureSize;uiWidth;uiHeight;worldTarget;rockTarget;rockLightMaskTarget;uiTarget;bayer8x8Texture;bayer4x4Texture;fogLitMaskTarget;compositeProgramInfo;rockCompositeProgramInfo;rockLightMaskProgramInfo;rockLightMaskUniformLocations;worldFogProgramInfo;fogLitMaskProgramInfo;fogLitMaskUniformLocations;fogShadowCircleProgramInfo;fogShadowCircleUniformLocations;primProgramInfo;glowProgramInfo;spriteProgramInfo;groundAmbientProgramInfo;groundLightProgramInfo;groundLightUniformLocations;bufferInfo;lightQuadBufferInfo;primBufferInfo;glowBufferInfo;spriteBufferInfo;primPositionUpload=new Float32Array(256);primColorUpload=new Float32Array(512);glowPositionUpload=new Float32Array(256);glowLocalUpload=new Float32Array(256);glowCenterUpload=new Float32Array(256);glowColorUpload=new Float32Array(512);spritePositionUpload=new Float32Array(256);spriteTexcoordUpload=new Float32Array(256);spritePaletteMixUpload=new Float32Array(128);spriteBgColorUpload=new Float32Array(512);spriteFgColorUpload=new Float32Array(512);primPositionLen=0;primColorLen=0;glowPositionLen=0;glowLocalLen=0;glowCenterLen=0;glowColorLen=0;spritePositionLen=0;spriteTexcoordLen=0;spritePaletteMixLen=0;spriteBgColorLen=0;spriteFgColorLen=0;primPositionCapacityFloats=2;primColorCapacityFloats=4;glowPositionCapacityFloats=2;glowLocalCapacityFloats=2;glowCenterCapacityFloats=2;glowColorCapacityFloats=4;spritePositionCapacityFloats=2;spriteTexcoordCapacityFloats=2;spritePaletteMixCapacityFloats=1;spriteBgColorCapacityFloats=4;spriteFgColorCapacityFloats=4;lastFrameStats;constructor(e,t,n,r,a){let o=e.getContext(`webgl`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1});if(!o)throw Error(`WebGL is unavailable in this browser.`);let s=o;this.compositeProgramInfo=Z(s,[W,ae],`composite`),this.rockCompositeProgramInfo=Z(s,[W,fe],`rock composite`),this.rockLightMaskProgramInfo=Z(s,[G,de],`rock light mask`),this.rockLightMaskUniformLocations=L(s,this.rockLightMaskProgramInfo.program,{bayerTex:!0,sourceSize:!0,center:!0,lightRadius:!0,quadRadius:!0,radiusOverflowMult:!0,lightColor:!0,intensity:!0,coneEnabled:!0,coneDir:!0,coneHalfAngle:!0}),this.worldFogProgramInfo=Z(s,[W,oe],`fog overlay`),this.fogLitMaskProgramInfo=Z(s,[G,le],`fog lit mask`),this.fogLitMaskUniformLocations=L(s,this.fogLitMaskProgramInfo.program,{normalTex:!0,bayerTex:!0,worldOrigin:!0,sourceSize:!0,center:!0,lightRadius:!0,quadRadius:!0,radiusOverflowMult:!0,lightHeightRadiusRatio:!0,normalTileSize:!0,normalStrength:!0,coneEnabled:!0,coneDir:!0,coneHalfAngle:!0}),this.fogShadowCircleProgramInfo=Z(s,[G,se],`fog shadow circle`),this.fogShadowCircleUniformLocations=L(s,this.fogShadowCircleProgramInfo.program,{sourceSize:!0,center:!0,lightRadius:!0,quadRadius:!0}),this.primProgramInfo=Z(s,[pe,me],`primitive`),this.glowProgramInfo=Z(s,[he,ge],`glow`),this.spriteProgramInfo=Z(s,[_e,ve],`sprite`),this.groundAmbientProgramInfo=Z(s,[W,be],`ground ambient`),this.groundLightProgramInfo=Z(s,[G,we],`ground light`),this.groundLightUniformLocations=L(s,this.groundLightProgramInfo.program,{normalTex:!0,diffuseTex:!0,bayerTex:!0,biomeMaskTex:!0,worldOrigin:!0,surfaceColor:!0,lightColor:!0,sourceSize:!0,center:!0,lightRadius:!0,quadRadius:!0,radiusOverflowMult:!0,intensity:!0,lightHeightRadiusRatio:!0,normalTileSize:!0,normalStrength:!0,biomeMaskEnabled:!0,biomeMaskOrigin:!0,biomeMaskSize:!0,biomeMaskCellSize:!0,iceEffectCenter:!0,biomeColor0:!0,biomeColor1:!0,biomeColor2:!0,biomeColor3:!0,coneEnabled:!0,coneDir:!0,coneHalfAngle:!0}),this.bufferInfo=i(s,{position:{numComponents:2,data:[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]},texcoord:{numComponents:2,data:[0,1,1,1,0,0,0,0,1,1,1,0]}}),this.lightQuadBufferInfo=i(s,{position:{numComponents:2,data:[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]}}),this.maxWorldWidth=t,this.maxWorldHeight=n,this.maxTextureSize=s.getParameter(s.MAX_TEXTURE_SIZE),this.uiWidth=r,this.uiHeight=a,this.worldTarget=Y(s,this.maxWorldWidth,this.maxWorldHeight),this.rockTarget=Y(s,this.maxWorldWidth,this.maxWorldHeight),this.rockLightMaskTarget=Y(s,this.maxWorldWidth,this.maxWorldHeight),this.uiTarget=Y(s,this.uiWidth,this.uiHeight),this.bayer8x8Texture=et(s),this.bayer4x4Texture=tt(s),this.fogLitMaskTarget=Y(s,this.maxWorldWidth,this.maxWorldHeight),this.lastFrameStats={presenterMs:0,worldPrimitiveCount:0,worldSpriteCount:0,uiPrimitiveCount:0,uiSpriteCount:0},this.primBufferInfo=i(s,{position:{numComponents:2,data:[0,0],drawType:s.DYNAMIC_DRAW},color:{numComponents:4,data:[1,1,1,1],drawType:s.DYNAMIC_DRAW}}),this.glowBufferInfo=i(s,{position:{numComponents:2,data:[0,0],drawType:s.DYNAMIC_DRAW},localPos:{numComponents:2,data:[0,0],drawType:s.DYNAMIC_DRAW},center:{numComponents:2,data:[0,0],drawType:s.DYNAMIC_DRAW},color:{numComponents:4,data:[1,1,1,1],drawType:s.DYNAMIC_DRAW}}),this.spriteBufferInfo=i(s,{position:{numComponents:2,data:[0,0],drawType:s.DYNAMIC_DRAW},texcoord:{numComponents:2,data:[0,0],drawType:s.DYNAMIC_DRAW},paletteMix:{numComponents:1,data:[0],drawType:s.DYNAMIC_DRAW},bgColor:{numComponents:4,data:[0,0,0,0],drawType:s.DYNAMIC_DRAW},fgColor:{numComponents:4,data:[1,1,1,1],drawType:s.DYNAMIC_DRAW}}),this.gl=s}dispose(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.bindTexture(this.gl.TEXTURE_2D,null),X(this.gl,this.worldTarget),X(this.gl,this.rockTarget),X(this.gl,this.rockLightMaskTarget),X(this.gl,this.uiTarget),X(this.gl,this.fogLitMaskTarget),this.bayer8x8Texture!=null&&(this.gl.deleteTexture(this.bayer8x8Texture),this.bayer8x8Texture=null),this.bayer4x4Texture!=null&&(this.gl.deleteTexture(this.bayer4x4Texture),this.bayer4x4Texture=null),Q(this.gl,this.compositeProgramInfo),Q(this.gl,this.rockCompositeProgramInfo),Q(this.gl,this.rockLightMaskProgramInfo),Q(this.gl,this.worldFogProgramInfo),Q(this.gl,this.fogLitMaskProgramInfo),Q(this.gl,this.fogShadowCircleProgramInfo),Q(this.gl,this.primProgramInfo),Q(this.gl,this.glowProgramInfo),Q(this.gl,this.spriteProgramInfo),Q(this.gl,this.groundAmbientProgramInfo),Q(this.gl,this.groundLightProgramInfo),$(this.gl,this.bufferInfo),$(this.gl,this.lightQuadBufferInfo),$(this.gl,this.primBufferInfo),$(this.gl,this.glowBufferInfo),$(this.gl,this.spriteBufferInfo)}resizeWorldTargets(e,t){if(!(e===this.maxWorldWidth&&t===this.maxWorldHeight)){if(e>this.maxTextureSize||t>this.maxTextureSize)throw Error(`World target size ${e}x${t} exceeds GPU texture limit ${this.maxTextureSize}.`);X(this.gl,this.worldTarget),X(this.gl,this.rockTarget),X(this.gl,this.rockLightMaskTarget),X(this.gl,this.fogLitMaskTarget),this.maxWorldWidth=e,this.maxWorldHeight=t,this.worldTarget=Y(this.gl,e,t),this.rockTarget=Y(this.gl,e,t),this.rockLightMaskTarget=Y(this.gl,e,t),this.fogLitMaskTarget=Y(this.gl,e,t)}}assertSourceSizes(e){if(this.resizeWorldTargets(e.worldSourceWidth,e.worldSourceHeight),e.uiSourceWidth>this.uiWidth||e.uiSourceHeight>this.uiHeight)throw Error(`UI source size exceeds the fixed UI target.`)}renderRockLightMask(e,n,i){if(e==null||e.length<=0)return 0;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.rockLightMaskTarget.framebuffer),this.gl.viewport(0,0,this.maxWorldWidth,this.maxWorldHeight),this.gl.disable(this.gl.BLEND),this.gl.disable(this.gl.DEPTH_TEST),this.gl.disable(this.gl.CULL_FACE),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.viewport(0,0,n,i),this.gl.useProgram(this.rockLightMaskProgramInfo.program),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.ONE,this.gl.ONE),t(this.gl,this.rockLightMaskProgramInfo,this.lightQuadBufferInfo);let a=this.rockLightMaskUniformLocations;R(this.gl,a.bayerTex,0,this.bayer4x4Texture),this.gl.uniform2f(a.sourceSize,n,i),this.gl.uniform1f(a.radiusOverflowMult,K);for(let t of e){let e=nt(t);e<=0||t.intensity<=0||(this.gl.uniform3f(a.lightColor,t.color.r/255,t.color.g/255,t.color.b/255),this.gl.uniform2f(a.center,t.centerX,t.centerY),this.gl.uniform1f(a.lightRadius,e),this.gl.uniform1f(a.quadRadius,e*K),this.gl.uniform1f(a.intensity,t.intensity),this.gl.uniform1f(a.coneEnabled,+(t.shape===`cone`)),this.gl.uniform2f(a.coneDir,t.shape===`cone`?t.dirX:1,t.shape===`cone`?t.dirY:0),this.gl.uniform1f(a.coneHalfAngle,t.shape===`cone`?t.halfAngle:Math.PI),r(this.gl,this.lightQuadBufferInfo,this.gl.TRIANGLES))}return this.gl.disable(this.gl.BLEND),1}drawRockComposite(n,i,a,o,s,c,l,u){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.worldTarget.framebuffer),this.gl.viewport(0,0,n,i),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.disable(this.gl.DEPTH_TEST),this.gl.disable(this.gl.CULL_FACE),this.gl.useProgram(this.rockCompositeProgramInfo.program),t(this.gl,this.rockCompositeProgramInfo,this.bufferInfo),e(this.rockCompositeProgramInfo,{u_rockTex:this.rockTarget.texture,u_rockLightMaskTex:this.rockLightMaskTarget.texture,u_worldSourceSize:[n,i],u_rockTargetSize:[this.maxWorldWidth,this.maxWorldHeight],u_worldOrigin:[a,o],u_iceEffectCenter:[s.x,s.y],u_biomeMaskTex:c?.texture??this.rockTarget.texture,u_biomeMaskEnabled:c==null?0:1,u_biomeMaskOrigin:c?[c.originGx,c.originGy]:[0,0],u_biomeMaskSize:c?[c.width,c.height]:[1,1],u_biomeMaskCellSize:c?.cellSize??1,u_lightMaskEnabled:l,u_time:u,u_bayerTex:this.bayer4x4Texture}),r(this.gl,this.bufferInfo,this.gl.TRIANGLES),this.gl.disable(this.gl.BLEND)}renderNormalMappedSurface(n,i,a,o,s,c){this.gl.disable(this.gl.BLEND),this.gl.disable(this.gl.DEPTH_TEST),this.gl.disable(this.gl.CULL_FACE);let l=i,u=a,d=n.biomeMask,f=d==null?0:1,p=d?.texture??u,m=d?[d.originGx,d.originGy]:[0,0],h=d?[d.width,d.height]:[1,1],g=d?.cellSize??1,_=d?.color0??[n.r,n.g,n.b],v=d?.color1??_,y=d?.color2??_,b=d?.color3??_;if(this.gl.useProgram(this.groundAmbientProgramInfo.program),t(this.gl,this.groundAmbientProgramInfo,this.bufferInfo),e(this.groundAmbientProgramInfo,{u_baseColor:[n.r,n.g,n.b,n.a],u_ambientColor:[n.ambientR,n.ambientG,n.ambientB],u_ambient:n.ambient,u_diffuseTex:u,u_worldOrigin:[n.worldOriginX,n.worldOriginY],u_iceEffectCenter:[c.x,c.y],u_sourceSize:[o,s],u_normalTileSize:n.normalTileSize,u_biomeMaskTex:p,u_biomeMaskEnabled:f,u_biomeMaskOrigin:m,u_biomeMaskSize:h,u_biomeMaskCellSize:g,u_biomeColor0:_,u_biomeColor1:v,u_biomeColor2:y,u_biomeColor3:b}),r(this.gl,this.bufferInfo,this.gl.TRIANGLES),n.lights.length<=0)return;this.gl.useProgram(this.groundLightProgramInfo.program),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA),t(this.gl,this.groundLightProgramInfo,this.lightQuadBufferInfo);let x=this.groundLightUniformLocations;R(this.gl,x.normalTex,0,l),R(this.gl,x.diffuseTex,1,u),R(this.gl,x.bayerTex,2,this.bayer4x4Texture),R(this.gl,x.biomeMaskTex,3,p),this.gl.uniform2f(x.worldOrigin,n.worldOriginX,n.worldOriginY),this.gl.uniform3f(x.surfaceColor,n.r,n.g,n.b),this.gl.uniform2f(x.sourceSize,o,s),this.gl.uniform1f(x.radiusOverflowMult,K),this.gl.uniform1f(x.normalTileSize,n.normalTileSize),this.gl.uniform1f(x.normalStrength,n.normalStrength),this.gl.uniform1f(x.biomeMaskEnabled,f),this.gl.uniform2f(x.iceEffectCenter,c.x,c.y),this.gl.uniform2f(x.biomeMaskOrigin,m[0],m[1]),this.gl.uniform2f(x.biomeMaskSize,h[0],h[1]),this.gl.uniform1f(x.biomeMaskCellSize,g),this.gl.uniform3f(x.biomeColor0,_[0],_[1],_[2]),this.gl.uniform3f(x.biomeColor1,v[0],v[1],v[2]),this.gl.uniform3f(x.biomeColor2,y[0],y[1],y[2]),this.gl.uniform3f(x.biomeColor3,b[0],b[1],b[2]);for(let e of n.lights){let t=nt(e);t<=0||(this.gl.uniform3f(x.lightColor,e.color.r/255,e.color.g/255,e.color.b/255),this.gl.uniform2f(x.center,e.centerX,e.centerY),this.gl.uniform1f(x.lightRadius,t),this.gl.uniform1f(x.quadRadius,t*K),this.gl.uniform1f(x.intensity,e.intensity),this.gl.uniform1f(x.lightHeightRadiusRatio,rt(t)),this.gl.uniform1f(x.coneEnabled,+(e.shape===`cone`)),this.gl.uniform2f(x.coneDir,e.shape===`cone`?e.dirX:1,e.shape===`cone`?e.dirY:0),this.gl.uniform1f(x.coneHalfAngle,e.shape===`cone`?e.halfAngle:Math.PI),r(this.gl,this.lightQuadBufferInfo,this.gl.TRIANGLES))}this.gl.disable(this.gl.BLEND)}renderFogLitMask(e,n){if(e.litLights.length<=0)return 0;this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.fogLitMaskTarget.framebuffer),this.gl.viewport(0,0,this.maxWorldWidth,this.maxWorldHeight),this.gl.disable(this.gl.BLEND),this.gl.disable(this.gl.DEPTH_TEST),this.gl.disable(this.gl.CULL_FACE),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.fogLitMaskProgramInfo.program),t(this.gl,this.fogLitMaskProgramInfo,this.lightQuadBufferInfo);let i=this.fogLitMaskUniformLocations;R(this.gl,i.normalTex,0,n),R(this.gl,i.bayerTex,1,this.bayer4x4Texture),this.gl.uniform2f(i.worldOrigin,e.worldOriginX,e.worldOriginY),this.gl.uniform2f(i.sourceSize,this.maxWorldWidth,this.maxWorldHeight),this.gl.uniform1f(i.radiusOverflowMult,K),this.gl.uniform1f(i.normalTileSize,N.NORMAL_MAPPED_SURFACE_TEXTURE_SIZE),this.gl.uniform1f(i.normalStrength,xe);for(let t of e.litLights){let e=nt(t);e<=0||t.intensity<=0||(this.gl.uniform2f(i.center,t.centerX,t.centerY),this.gl.uniform1f(i.lightRadius,e),this.gl.uniform1f(i.quadRadius,e*K),this.gl.uniform1f(i.lightHeightRadiusRatio,rt(e)),this.gl.uniform1f(i.coneEnabled,+(t.shape===`cone`)),this.gl.uniform2f(i.coneDir,t.shape===`cone`?t.dirX:1,t.shape===`cone`?t.dirY:0),this.gl.uniform1f(i.coneHalfAngle,t.shape===`cone`?t.halfAngle:Math.PI),r(this.gl,this.lightQuadBufferInfo,this.gl.TRIANGLES))}if(e.shadowCircles.length>0){this.gl.useProgram(this.fogShadowCircleProgramInfo.program),t(this.gl,this.fogShadowCircleProgramInfo,this.lightQuadBufferInfo);let n=this.fogShadowCircleUniformLocations;this.gl.uniform2f(n.sourceSize,this.maxWorldWidth,this.maxWorldHeight);for(let t of e.shadowCircles)t.radius<=0||(this.gl.uniform2f(n.center,t.centerX,t.centerY),this.gl.uniform1f(n.lightRadius,t.radius),this.gl.uniform1f(n.quadRadius,t.radius),r(this.gl,this.lightQuadBufferInfo,this.gl.TRIANGLES))}return 1}drawWorldFogOverlay(n,i,a,o){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.worldTarget.framebuffer),this.gl.viewport(0,0,n,i),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),this.gl.disable(this.gl.DEPTH_TEST),this.gl.disable(this.gl.CULL_FACE),this.gl.useProgram(this.worldFogProgramInfo.program),t(this.gl,this.worldFogProgramInfo,this.bufferInfo),e(this.worldFogProgramInfo,{u_fogLitMaskTex:this.fogLitMaskTarget.texture,u_worldSourceSize:[n,i],u_fogLitMaskSize:[this.maxWorldWidth,this.maxWorldHeight],u_fogLitMaskEnabled:o,u_fogColor:[a.r,a.g,a.b,a.a]}),r(this.gl,this.bufferInfo,this.gl.TRIANGLES),this.gl.disable(this.gl.BLEND)}beginPrimBatch(){this.primPositionLen=0,this.primColorLen=0}beginGlowBatch(){this.glowPositionLen=0,this.glowLocalLen=0,this.glowCenterLen=0,this.glowColorLen=0}beginSpriteBatch(){this.spritePositionLen=0,this.spriteTexcoordLen=0,this.spritePaletteMixLen=0,this.spriteBgColorLen=0,this.spriteFgColorLen=0}ensureUploadArrayCapacity(e,t){if(t<=e.length)return e;let n=e.length;for(;n<t;)n*=2;return new Float32Array(n)}ensurePrimUploadCapacity(e,t){this.primPositionUpload=this.ensureUploadArrayCapacity(this.primPositionUpload,e),this.primColorUpload=this.ensureUploadArrayCapacity(this.primColorUpload,t)}ensureGlowUploadCapacity(e,t,n,r){this.glowPositionUpload=this.ensureUploadArrayCapacity(this.glowPositionUpload,e),this.glowLocalUpload=this.ensureUploadArrayCapacity(this.glowLocalUpload,t),this.glowCenterUpload=this.ensureUploadArrayCapacity(this.glowCenterUpload,n),this.glowColorUpload=this.ensureUploadArrayCapacity(this.glowColorUpload,r)}ensureSpriteUploadCapacity(e,t,n,r,i){this.spritePositionUpload=this.ensureUploadArrayCapacity(this.spritePositionUpload,e),this.spriteTexcoordUpload=this.ensureUploadArrayCapacity(this.spriteTexcoordUpload,t),this.spritePaletteMixUpload=this.ensureUploadArrayCapacity(this.spritePaletteMixUpload,n),this.spriteBgColorUpload=this.ensureUploadArrayCapacity(this.spriteBgColorUpload,r),this.spriteFgColorUpload=this.ensureUploadArrayCapacity(this.spriteFgColorUpload,i)}appendRectToPrimBatchUnsafe(e,t,n,r,i,a,o,s,c=0,l=e+n*.5,u=t+r*.5){let d=Math.abs(c)>1e-6,f=e,p=t,m=e+n,h=t,g=e,_=t+r,v=e+n,y=t+r;if(d){let e=Math.cos(c),t=Math.sin(c),n=f-l,r=p-u,i=m-l,a=h-u,o=g-l,s=_-u,d=v-l,b=y-u;f=n*e-r*t+l,p=n*t+r*e+u,m=i*e-a*t+l,h=i*t+a*e+u,g=o*e-s*t+l,_=o*t+s*e+u,v=d*e-b*t+l,y=d*t+b*e+u}let b=this.primPositionUpload,x=this.primPositionLen;b[x++]=f,b[x++]=p,b[x++]=m,b[x++]=h,b[x++]=g,b[x++]=_,b[x++]=g,b[x++]=_,b[x++]=m,b[x++]=h,b[x++]=v,b[x++]=y,this.primPositionLen=x;let S=this.primColorUpload,C=this.primColorLen;for(let e=0;e<6;e++)S[C++]=i,S[C++]=a,S[C++]=o,S[C++]=s;this.primColorLen=C}appendSpriteToBatchUnsafe(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_=0,v=e+n*.5,y=t+r*.5){let b=e,x=t,S=e+n,C=t,w=e,T=t+r,E=e+n,D=t+r;if(Math.abs(_)>1e-6){let e=Math.cos(_),t=Math.sin(_),n=b-v,r=x-y,i=S-v,a=C-y,o=w-v,s=T-y,c=E-v,l=D-y;b=n*e-r*t+v,x=n*t+r*e+y,S=i*e-a*t+v,C=i*t+a*e+y,w=o*e-s*t+v,T=o*t+s*e+y,E=c*e-l*t+v,D=c*t+l*e+y}let O=this.spritePositionUpload,k=this.spritePositionLen;O[k++]=b,O[k++]=x,O[k++]=S,O[k++]=C,O[k++]=w,O[k++]=T,O[k++]=w,O[k++]=T,O[k++]=S,O[k++]=C,O[k++]=E,O[k++]=D,this.spritePositionLen=k;let A=this.spriteTexcoordUpload,j=this.spriteTexcoordLen;A[j++]=i,A[j++]=a,A[j++]=o,A[j++]=a,A[j++]=i,A[j++]=s,A[j++]=i,A[j++]=s,A[j++]=o,A[j++]=a,A[j++]=o,A[j++]=s,this.spriteTexcoordLen=j;let M=this.spritePaletteMixUpload,N=this.spritePaletteMixLen;for(let e=0;e<6;e++)M[N++]=c;this.spritePaletteMixLen=N;let P=this.spriteBgColorUpload,F=this.spriteBgColorLen;for(let e=0;e<6;e++)P[F++]=l,P[F++]=u,P[F++]=d,P[F++]=f;this.spriteBgColorLen=F;let I=this.spriteFgColorUpload,L=this.spriteFgColorLen;for(let e=0;e<6;e++)I[L++]=p,I[L++]=m,I[L++]=h,I[L++]=g;this.spriteFgColorLen=L}appendCircleToPrimBatchUnsafe(e,t,n,r,i,a,o){let s=this.primPositionUpload,c=this.primColorUpload,l=this.primPositionLen,u=this.primColorLen;for(let d=0;d<q;d++){let f=d*2,p=f+2,m=e+ke[f+0]*n,h=t+ke[f+1]*n,g=e+ke[p+0]*n,_=t+ke[p+1]*n;s[l++]=e,s[l++]=t,s[l++]=m,s[l++]=h,s[l++]=g,s[l++]=_,c[u++]=r,c[u++]=i,c[u++]=a,c[u++]=o,c[u++]=r,c[u++]=i,c[u++]=a,c[u++]=o,c[u++]=r,c[u++]=i,c[u++]=a,c[u++]=o}this.primPositionLen=l,this.primColorLen=u}ensurePrimGpuCapacity(e,t){if(e>this.primPositionCapacityFloats){let t=this.primPositionCapacityFloats;for(;t<e;)t*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.primBufferInfo.attribs.position.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t*4,this.gl.DYNAMIC_DRAW),this.primPositionCapacityFloats=t}if(t>this.primColorCapacityFloats){let e=this.primColorCapacityFloats;for(;e<t;)e*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.primBufferInfo.attribs.color.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e*4,this.gl.DYNAMIC_DRAW),this.primColorCapacityFloats=e}}uploadPrimBatch(){let e=this.primPositionLen;if(e===0)return!1;let t=this.primColorLen;return this.ensurePrimGpuCapacity(e,t),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.primBufferInfo.attribs.position.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.primPositionUpload.subarray(0,e)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.primBufferInfo.attribs.color.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.primColorUpload.subarray(0,t)),this.primBufferInfo.numElements=e/2,this.primBufferInfo.numElements>0}appendGlowToBatchUnsafe(e,t,n,r,i,a,o){let s=this.glowPositionUpload,c=this.glowLocalUpload,l=this.glowCenterUpload,u=this.glowColorUpload,d=this.glowPositionLen,f=this.glowLocalLen,p=this.glowCenterLen,m=this.glowColorLen;for(let r=0;r<Ie.length;r+=2){let i=Ie[r+0],a=Ie[r+1];s[d++]=e+i*n,s[d++]=t+a*n,c[f++]=i,c[f++]=a}for(let n=0;n<6;n++)l[p++]=e,l[p++]=t,u[m++]=r,u[m++]=i,u[m++]=a,u[m++]=o;this.glowPositionLen=d,this.glowLocalLen=f,this.glowCenterLen=p,this.glowColorLen=m}ensureGlowGpuCapacity(e,t,n,r){if(e>this.glowPositionCapacityFloats){let t=this.glowPositionCapacityFloats;for(;t<e;)t*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glowBufferInfo.attribs.position.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t*4,this.gl.DYNAMIC_DRAW),this.glowPositionCapacityFloats=t}if(t>this.glowLocalCapacityFloats){let e=this.glowLocalCapacityFloats;for(;e<t;)e*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glowBufferInfo.attribs.localPos.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e*4,this.gl.DYNAMIC_DRAW),this.glowLocalCapacityFloats=e}if(n>this.glowCenterCapacityFloats){let e=this.glowCenterCapacityFloats;for(;e<n;)e*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glowBufferInfo.attribs.center.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e*4,this.gl.DYNAMIC_DRAW),this.glowCenterCapacityFloats=e}if(r>this.glowColorCapacityFloats){let e=this.glowColorCapacityFloats;for(;e<r;)e*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glowBufferInfo.attribs.color.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e*4,this.gl.DYNAMIC_DRAW),this.glowColorCapacityFloats=e}}uploadGlowBatch(){let e=this.glowPositionLen;if(e===0)return!1;let t=this.glowLocalLen,n=this.glowCenterLen,r=this.glowColorLen;return this.ensureGlowGpuCapacity(e,t,n,r),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glowBufferInfo.attribs.position.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.glowPositionUpload.subarray(0,e)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glowBufferInfo.attribs.localPos.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.glowLocalUpload.subarray(0,t)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glowBufferInfo.attribs.center.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.glowCenterUpload.subarray(0,n)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glowBufferInfo.attribs.color.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.glowColorUpload.subarray(0,r)),this.glowBufferInfo.numElements=e/2,this.glowBufferInfo.numElements>0}ensureSpriteGpuCapacity(e,t,n,r,i){if(e>this.spritePositionCapacityFloats){let t=this.spritePositionCapacityFloats;for(;t<e;)t*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.position.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,t*4,this.gl.DYNAMIC_DRAW),this.spritePositionCapacityFloats=t}if(t>this.spriteTexcoordCapacityFloats){let e=this.spriteTexcoordCapacityFloats;for(;e<t;)e*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.texcoord.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e*4,this.gl.DYNAMIC_DRAW),this.spriteTexcoordCapacityFloats=e}if(n>this.spritePaletteMixCapacityFloats){let e=this.spritePaletteMixCapacityFloats;for(;e<n;)e*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.paletteMix.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e*4,this.gl.DYNAMIC_DRAW),this.spritePaletteMixCapacityFloats=e}if(r>this.spriteBgColorCapacityFloats){let e=this.spriteBgColorCapacityFloats;for(;e<r;)e*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.bgColor.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e*4,this.gl.DYNAMIC_DRAW),this.spriteBgColorCapacityFloats=e}if(i>this.spriteFgColorCapacityFloats){let e=this.spriteFgColorCapacityFloats;for(;e<i;)e*=2;this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.fgColor.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,e*4,this.gl.DYNAMIC_DRAW),this.spriteFgColorCapacityFloats=e}}uploadSpriteBatch(){let e=this.spritePositionLen;if(e===0)return!1;let t=this.spriteTexcoordLen,n=this.spritePaletteMixLen,r=this.spriteBgColorLen,i=this.spriteFgColorLen;return this.ensureSpriteGpuCapacity(e,t,n,r,i),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.position.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.spritePositionUpload.subarray(0,e)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.texcoord.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.spriteTexcoordUpload.subarray(0,t)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.paletteMix.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.spritePaletteMixUpload.subarray(0,n)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.bgColor.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.spriteBgColorUpload.subarray(0,r)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.spriteBufferInfo.attribs.fgColor.buffer),this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,this.spriteFgColorUpload.subarray(0,i)),this.spriteBufferInfo.numElements=e/2,this.spriteBufferInfo.numElements>0}useAlphaBlend(e){if(this.gl.enable(this.gl.BLEND),e){this.gl.blendFuncSeparate(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA,this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA);return}this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)}drawPrimBatch(n,i,a){this.gl.useProgram(this.primProgramInfo.program),this.useAlphaBlend(a),t(this.gl,this.primProgramInfo,this.primBufferInfo),e(this.primProgramInfo,{u_sourceSize:[n,i]}),r(this.gl,this.primBufferInfo,this.gl.TRIANGLES),this.gl.disable(this.gl.BLEND)}drawGlowBatch(n,i,a){this.gl.useProgram(this.glowProgramInfo.program),this.useAlphaBlend(a),t(this.gl,this.glowProgramInfo,this.glowBufferInfo),e(this.glowProgramInfo,{u_sourceSize:[n,i],u_bayerTex:this.bayer4x4Texture}),r(this.gl,this.glowBufferInfo,this.gl.TRIANGLES),this.gl.disable(this.gl.BLEND)}drawSpriteBatch(n,i,a,o){this.gl.useProgram(this.spriteProgramInfo.program),this.useAlphaBlend(o),t(this.gl,this.spriteProgramInfo,this.spriteBufferInfo),e(this.spriteProgramInfo,{u_tex:n,u_sourceSize:[i,a]}),r(this.gl,this.spriteBufferInfo,this.gl.TRIANGLES),this.gl.disable(this.gl.BLEND)}appendPrimitivesToPrimBatch(e,t,n,r){if(n<=0)return 0;let i=0,a=0;for(let o=0;o<n;o++)e[(t+o)*r+11]>=.5?a+=1:i+=1;this.ensurePrimUploadCapacity(this.primPositionLen+i*Te+a*De,this.primColorLen+i*Ee+a*Oe);for(let i=0;i<n;i++){let n=(t+i)*r;if(e[n+11]>=.5){this.appendCircleToPrimBatchUnsafe(e[n+0],e[n+1],e[n+2],e[n+4],e[n+5],e[n+6],e[n+7]);continue}this.appendRectToPrimBatchUnsafe(e[n+0],e[n+1],e[n+2],e[n+3],e[n+4],e[n+5],e[n+6],e[n+7],e[n+8],e[n+9],e[n+10])}return n}appendSpritesToBatch(e,t,n){if(n<=0)return 0;this.ensureSpriteUploadCapacity(this.spritePositionLen+n*Ae,this.spriteTexcoordLen+n*je,this.spritePaletteMixLen+n*Re,this.spriteBgColorLen+n*Le,this.spriteFgColorLen+n*Le);for(let r=0;r<n;r++){let n=(t+r)*21;this.appendSpriteToBatchUnsafe(e[n+0],e[n+1],e[n+2],e[n+3],e[n+4],e[n+5],e[n+6],e[n+7],e[n+8],e[n+9],e[n+10],e[n+11],e[n+12],e[n+13],e[n+14],e[n+15],e[n+16],e[n+18],e[n+19],e[n+20])}return n}appendGlowsToBatch(e,t,n){this.ensureGlowUploadCapacity(this.glowPositionLen+n*Me,this.glowLocalLen+n*Ne,this.glowCenterLen+n*Pe,this.glowColorLen+n*Fe);for(let r=0;r<n;r++){let n=(t+r)*J;this.appendGlowToBatchUnsafe(e[n+0],e[n+1],e[n+2],e[n+3],e[n+4],e[n+5],e[n+6])}}drawGlows(e,t,n,r,i,a){n<=0||(this.beginGlowBatch(),this.appendGlowsToBatch(e,t,n),this.uploadGlowBatch()&&this.drawGlowBatch(r,i,a))}drawPrimitives(e,t,n,r,i,a,o){this.beginPrimBatch();let s=this.appendPrimitivesToPrimBatch(e,t,n,r);return s<=0||!this.uploadPrimBatch()?0:(this.drawPrimBatch(i,a,o),s)}drawSprites(e,t,n,r,i,a,o){if(n<=0)return 0;let s=0,c=t,l=t+n;for(;c<l;){let t=c*21,n=Math.floor(e[t+17]),u=c+1;for(;u<l;){let t=u*21;if(Math.floor(e[t+17])!==n)break;u+=1}let d=r[n],f=u-c;this.beginSpriteBatch(),this.appendSpritesToBatch(e,c,f),this.uploadSpriteBatch()&&(this.drawSpriteBatch(d,i,a,o),s+=f),c=u}return s}drawOrdered(e,t,n,r,i,a,o,s,c,l,u,d,f,p=null){if(i<=0){if(a<=0&&o<=0&&s<=0)return{primitiveCount:0,spriteCount:0};throw Error(`Missing draw commands for non-empty draw stream.`)}let m=0,h=0;for(let a=0;a<i;a++){let i=r[a];if(!(i.count<=0))switch(i.type){case 0:m+=this.drawPrimitives(e,i.start,i.count,c,l,u,f);continue;case 1:h+=this.drawSprites(t,i.start,i.count,d,l,u,f);continue;case 2:this.drawGlows(n,i.start,i.count,l,u,f);continue;case 3:S(p!=null,`Rock composite command cannot be used in this draw stream.`),p();continue}}return{primitiveCount:m,spriteCount:h}}present(n){let i=performance.now();this.assertSourceSizes(n);let a=n.worldSourceWidth,o=n.worldSourceHeight,s=n.uiSourceWidth,c=n.uiSourceHeight,l=n.post??{},u=l.worldFog??null,d=l.normalMappedSurfaces??null,f=l.rockLights??null,p=n.worldPrimitives,m=n.worldSprites,h=n.worldGlows,g=n.worldDrawCommands,_=n.rockPrimitives,v=n.postFogWorldPrimitives,y=n.postFogWorldSprites,b=n.postFogWorldGlows,x=n.postFogWorldDrawCommands,S=n.uiPrimitives,C=n.uiSprites,w=n.uiGlows,T=n.uiDrawCommands,E=n.worldPrimitiveStride,D=n.uiPrimitiveStride,O=n.worldPrimitiveCount,k=n.worldSpriteCount,A=n.worldGlowCount,j=n.worldDrawCommandCount,M=n.rockPrimitiveCount,N=n.postFogWorldPrimitiveCount,P=n.postFogWorldSpriteCount,F=n.postFogWorldGlowCount,I=n.postFogWorldDrawCommandCount,L=n.uiPrimitiveCount,R=n.uiSpriteCount,z=n.uiGlowCount,ee=n.uiDrawCommandCount,B=[n.tileAtlasTexture,n.ttfTextAtlasTexture,n.administratorPortraitTexture,n.titleTextAtlasTexture],te=Math.max(0,Math.min(1,l.transitionFade??0)),V=d?.find(e=>e.biomeMask!=null)?.biomeMask??null,H=this.worldTarget,ne=this.rockTarget,U=this.uiTarget,re=this.renderRockLightMask(f,a,o);this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,ne.framebuffer),this.gl.disable(this.gl.BLEND),this.gl.disable(this.gl.DEPTH_TEST),this.gl.disable(this.gl.CULL_FACE),this.gl.viewport(0,0,this.maxWorldWidth,this.maxWorldHeight),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.viewport(0,0,a,o);let ie=this.drawPrimitives(_,0,M,E,a,o,!0);if(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,H.framebuffer),this.gl.disable(this.gl.BLEND),this.gl.disable(this.gl.DEPTH_TEST),this.gl.disable(this.gl.CULL_FACE),this.gl.viewport(0,0,this.maxWorldWidth,this.maxWorldHeight),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.viewport(0,0,a,o),d!=null)for(let e of d)this.renderNormalMappedSurface(e,n.groundNormalMapTexture,n.groundDiffuseMapTexture,a,o,n.iceEffectCenter);let W=this.drawOrdered(p,m,h,g,j,O,k,A,E,a,o,B,!1,()=>{this.drawRockComposite(a,o,n.worldOriginX,n.worldOriginY,n.iceEffectCenter,V,re,n.time??0)});if(u!=null){let e=this.renderFogLitMask(u,n.groundNormalMapTexture);this.drawWorldFogOverlay(a,o,u,e)}this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,H.framebuffer),this.gl.viewport(0,0,a,o);let ae=this.drawOrdered(v,y,b,x,I,N,P,F,E,a,o,B,!1);this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,U.framebuffer),this.gl.viewport(0,0,this.uiWidth,this.uiHeight),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT);let oe=this.drawOrdered(S,C,w,T,ee,L,R,z,D,s,c,B,!0);this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.gl.drawingBufferWidth,this.gl.drawingBufferHeight),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.compositeProgramInfo.program),t(this.gl,this.compositeProgramInfo,this.bufferInfo),e(this.compositeProgramInfo,{u_worldTex:H.texture,u_uiTex:U.texture,u_screenOverlayTex:n.screenOverlayTexture??U.texture,u_bayerTex:this.bayer8x8Texture,u_worldSourceSize:[a,o],u_worldTargetSize:[this.maxWorldWidth,this.maxWorldHeight],u_uiSourceSize:[s,c],u_uiTargetSize:[this.uiWidth,this.uiHeight],u_screenOverlayEnabled:n.screenOverlayTexture==null?0:1,u_transitionFade:te}),r(this.gl,this.bufferInfo,this.gl.TRIANGLES),this.lastFrameStats={presenterMs:performance.now()-i,worldPrimitiveCount:W.primitiveCount+ie+ae.primitiveCount,worldSpriteCount:W.spriteCount+ae.spriteCount,uiPrimitiveCount:oe.primitiveCount,uiSpriteCount:oe.spriteCount}}getLastFrameStats(){return this.lastFrameStats}};export{d as A,y as C,p as D,E,T as F,h as I,s as M,m as N,w as O,o as P,g as S,x as T,f as _,H as a,v as b,N as c,M as d,D as f,S as g,a as h,B as i,C as j,c as k,I as l,k as m,ie as n,V as o,O as p,ee as r,z as s,K as t,F as u,u as v,_ as w,b as x,l as y};