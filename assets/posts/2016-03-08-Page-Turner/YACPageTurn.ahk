#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; ===============================================
; YACReader touch screen page turner
; ===============================================
#IfWinActive ahk_exe YACReader.exe
	;Forces following to code to only work when win is active
	~LButton::
		MouseGetPos, MouseX, MouseY ; Get mouse position
		WinGetPos, , ,Width, , A  ; Get active client window width and heigth
		FQuarter := (Width/4) ; find left hand quarter size
		LQuarter := (Width - FQuarter) ; find right hand quarter size
		if (MouseX < FQuarter) ; if in the left hand side
		{
			send {Left} ; send left key
		} 
		else if (MouseX > LQuarter) ; if in the right hand side
		{
			send {Right} ; send right key
		}
		Return
