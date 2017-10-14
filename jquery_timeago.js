// Timeago jQuery plugin ~ URL: http://timeago.yarp.com
(function(e) {
  if(typeof define === "function" && define.amd) {
    define(["jquery"], e)
  } else {
    e(jQuery)
  }
})(function(e) {
  function r() {
    var n = i(this);
    var r = t.settings;
    if(!isNaN(n.datetime)) {
      if(r.cutoff == 0 || Math.abs(o(n.datetime)) < r.cutoff) {
        e(this).text(s(n.datetime))
      }
    }
    return this
  }

  function i(n) {
    n = e(n);
    if(!n.data("timeago")) {
      n.data("timeago", {
        datetime: t.datetime(n)
      });
      var r = e.trim(n.text());
      if(t.settings.localeTitle) {
        n.attr("title", n.data("timeago").datetime.toLocaleString())
      } else if(r.length > 0 && !(t.isTime(n) && n.attr("title"))) {
        n.attr("title", r)
      }
    }
    return n.data("timeago")
  }

  function s(e) {
    return t.inWords(o(e))
  }

  function o(e) {
    return(new Date).getTime() - e.getTime()
  }
  e.timeago = function(t) {
    if(t instanceof Date) {
      return s(t)
    } else if(typeof t === "string") {
      return s(e.timeago.parse(t))
    } else if(typeof t === "number") {
      return s(new Date(t))
    } else {
      return s(e.timeago.datetime(t))
    }
  };
  var t = e.timeago;
  e.extend(e.timeago, {
    settings: {
      refreshMillis: 6e4,
      allowPast: true,
      allowFuture: false,
      localeTitle: false,
      cutoff: 0,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        inPast: "in a moment",
        seconds: "a few seconds",
        minute: "a minute",
        minutes: "%d mins",
        hour: "a hour",
        hours: "%d hours",
        day: "a day",
        days: "%d days",
        month: "a month",
        months: "%d months",
        year: "a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },
    inWords: function(t) {
      function l(r, i) {
        var s = e.isFunction(r) ? r(i, t) : r;
        var o = n.numbers && n.numbers[i] || i;
        return s.replace(/%d/i, o)
      }
      if(!this.settings.allowPast && !this.settings.allowFuture) {
        throw "timeago allowPast and allowFuture settings can not both be set to false."
      }
      var n = this.settings.strings;
      var r = n.prefixAgo;
      var i = n.suffixAgo;
      if(this.settings.allowFuture) {
        if(t < 0) {
          r = n.prefixFromNow;
          i = n.suffixFromNow
        }
      }
      if(!this.settings.allowPast && t >= 0) {
        return this.settings.strings.inPast
      }
      var s = Math.abs(t) / 1e3;
      var o = s / 60;
      var u = o / 60;
      var a = u / 24;
      var f = a / 365;
      var c = s < 45 && l(n.seconds, Math.round(s)) || s < 90 && l(n.minute, 1) || o < 45 && l(n.minutes, Math.round(o)) || o < 90 && l(n.hour, 1) || u < 24 && l(n.hours, Math.round(u)) || u < 42 && l(n.day, 1) || a < 30 && l(n.days, Math.round(a)) || a < 45 && l(n.month, 1) || a < 365 && l(n.months, Math.round(a / 30)) || f < 1.5 && l(n.year, 1) || l(n.years, Math.round(f));
      var h = n.wordSeparator || "";
      if(n.wordSeparator === undefined) {
        h = " "
      }
      return e.trim([r, c, i].join(h))
    },
    parse: function(t) {
      var n = e.trim(t);
      n = n.replace(/\.\d+/, "");
      n = n.replace(/-/, "/").replace(/-/, "/");
      n = n.replace(/T/, " ").replace(/Z/, " UTC");
      n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
      n = n.replace(/([\+\-]\d\d)$/, " $100");
      return new Date(n)
    },
    datetime: function(n) {
      var r = t.isTime(n) ? e(n).attr("datetime") : e(n).attr("title");
      return t.parse(r)
    },
    isTime: function(t) {
      return e(t).get(0).tagName.toLowerCase() === "time"
    }
  });
  var n = {
    init: function() {
      var n = e.proxy(r, this);
      n();
      var i = t.settings;
      if(i.refreshMillis > 0) {
        this._timeagoInterval = setInterval(n, i.refreshMillis)
      }
    },
    update: function(n) {
      var i = t.parse(n);
      e(this).data("timeago", {
        datetime: i
      });
      if(t.settings.localeTitle) e(this).attr("title", i.toLocaleString());
      r.apply(this)
    },
    updateFromDOM: function() {
      e(this).data("timeago", {
        datetime: t.parse(t.isTime(this) ? e(this).attr("datetime") : e(this).attr("title"))
      });
      r.apply(this)
    },
    dispose: function() {
      if(this._timeagoInterval) {
        window.clearInterval(this._timeagoInterval);
        this._timeagoInterval = null
      }
    }
  };
  e.fn.timeago = function(e, t) {
    var r = e ? n[e] : n.init;
    if(!r) {
      throw new Error("Unknown function name '" + e + "' for timeago")
    }
    this.each(function() {
      r.call(this, t)
    });
    return this
  };
  document.createElement("abbr");
  document.createElement("time")
});
